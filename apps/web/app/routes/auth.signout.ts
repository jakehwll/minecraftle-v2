import { redirect } from "react-router";
import type { Route } from "./+types/auth.signout";
import { lucia } from "~/utils/lucia";

export const loader = async ({ request }: Route.LoaderArgs) => {
  const cookie = request.headers.get("Cookie");
  if (!cookie) return { user: null, session: null };
  const sessionId = lucia.readSessionCookie(cookie);
  if (!sessionId) return { user: null, session: null };
  await lucia.invalidateSession(sessionId);
  return redirect("/")
};
