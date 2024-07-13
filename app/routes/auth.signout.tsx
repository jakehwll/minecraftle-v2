import { LoaderFunctionArgs, redirect } from "@remix-run/node";
import { lucia } from "~/utils/lucia";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const cookie = request.headers.get("Cookie");
  if (!cookie) return { user: null, session: null };
  const sessionId = lucia.readSessionCookie(cookie);
  if (!sessionId) return { user: null, session: null };
  await lucia.invalidateSession(sessionId);
  return redirect("/")
};
