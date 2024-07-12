import { LoaderFunctionArgs, redirect } from "@remix-run/node";
import { parseCookies } from "oslo/cookie";
import { prisma } from "~/utils/database";
import { initializeArcticDiscord, Profile } from "~/utils/discord";
import { initializeLucia } from "~/utils/lucia";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const cookies = parseCookies(request.headers.get("Cookie") ?? "");
  const storedState = cookies.get("state") ?? null;
  const storedCodeVerifier = cookies.get("code_verifier") ?? null;

  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");

  if (!code || !storedState || !storedCodeVerifier || state !== storedState) {
    return new Response(null, {
      status: 400,
    });
  }

  try {
    const discord = initializeArcticDiscord();
    const tokens = await discord.validateAuthorizationCode(code);
    const response = await fetch("https://discord.com/api/v10/users/@me", {
      headers: {
        Authorization: `Bearer ${tokens.accessToken}`,
      },
    });

    const profile = (await response.json()) as Profile;
    const lucia = initializeLucia();

    const existsUser = await prisma.user.findFirst({
      where: {
        id: profile.id,
      },
    });

    if (existsUser) {
      const session = await lucia.createSession(existsUser.id.toString(), {});
      const sessionCookie = lucia.createSessionCookie(session.id);
      return redirect("/", {
        headers: [["Set-Cookie", sessionCookie.serialize()]],
      });
    }

    const user = await prisma.user.create({
      data: {
        id: profile.id,
      },
    });

    const session = await lucia.createSession(user.id.toString(), {});
    const sessionCookie = lucia.createSessionCookie(session.id);

    return redirect("/", {
      headers: [["Set-Cookie", sessionCookie.serialize()]],
    });
  } catch (error) {
    console.error(error);
    return redirect("/login");
  }
};

export default function Empty() {
  return null;
}
