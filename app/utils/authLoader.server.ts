import { lucia } from "./lucia";

export const authLoader = async (request: Request) => {
  const cookie = request.headers.get("Cookie");
  if (!cookie) return { user: null, session: null };
  const sessionId = lucia.readSessionCookie(cookie);
  if (!sessionId) return { user: null, session: null };
  const { user, session } = await lucia.validateSession(sessionId);
  return { user, session };
};
