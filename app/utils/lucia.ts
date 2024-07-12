import { PrismaAdapter } from "@lucia-auth/adapter-prisma";
import { PrismaClient } from "@prisma/client";
import { Lucia, TimeSpan } from "lucia";

const client = new PrismaClient();
let lucia: Lucia | null = null;

export function initializeLucia() {
  if (lucia) {
    return lucia;
  }
  const { NODE_ENV } = process.env;
  const adapter = new PrismaAdapter(client.session, client.user);
  lucia = new Lucia(adapter, {
    sessionExpiresIn: new TimeSpan(2, "w"),
    sessionCookie: {
      name: "session",
      attributes: {
        secure: NODE_ENV === "production",
        sameSite: "lax",
      }
    },
  });
	return lucia;
}

declare module "lucia" {
	interface Register {
		Auth: ReturnType<typeof initializeLucia>;
	}
}