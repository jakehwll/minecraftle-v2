import type { FetchCreateContextFnOptions } from "@trpc/server/adapters/fetch";
import { lucia } from "~/utils/lucia";

export async function createContext({ req }: FetchCreateContextFnOptions) {
  const cookie = req.headers.get("Cookie");
  const sessionId = cookie ? lucia.readSessionCookie(cookie) : null;
  const session = sessionId ? await lucia.validateSession(sessionId) : null;

  return {
    user: session?.user,
  };
}
export type Context = Awaited<ReturnType<typeof createContext>>;
