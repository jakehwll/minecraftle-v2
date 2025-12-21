import { redirect } from "react-router";
import type { Route } from "./+types/auth.discord.callback";
import { parseCookies } from "oslo/cookie";
import { prisma } from "~/utils/database";
import { discord, Profile } from "~/utils/discord";
import { lucia } from "~/utils/lucia";

const DISCORD_API_URL = "https://discord.com/api/v10";
const DISCORD_ENDPOINT_IDENTIFY = `${DISCORD_API_URL}/users/@me`;

export const loader = async ({ request }: Route.LoaderArgs) => {
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
    const tokens = await discord.validateAuthorizationCode(code);
    const response = await fetch(DISCORD_ENDPOINT_IDENTIFY, {
      headers: {
        Authorization: `Bearer ${tokens.accessToken}`,
      },
    });

    const profile = (await response.json()) as Profile;

    const user = await prisma.user.upsert({
      create: {
        id: profile.id,
        username: profile.username,
      },
      where: {
        id: profile.id,
      },
      update: {
        username: profile.username,
      },
    });

    const session = await lucia.createSession(user.id, {});
    const sessionCookie = lucia.createSessionCookie(session.id);

    return redirect("/", {
      headers: [["Set-Cookie", sessionCookie.serialize()]],
    });
  } catch (error) {
    console.error(error);
    return redirect("/");
  }
};

export default function Page() {
  return null;
}
