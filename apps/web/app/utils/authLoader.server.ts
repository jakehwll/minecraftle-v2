import { lucia } from "./lucia";

export const authLoader = async (req: Request) => {
  const cookie = req.headers.get("Cookie");
  const sessionId = cookie ? lucia.readSessionCookie(cookie) : null;
  const session = sessionId ? await lucia.validateSession(sessionId) : null;

  return {
    user: session?.user,
    backend: process.env.VERCEL_URL ?? "http://localhost:5173",
  };
};
