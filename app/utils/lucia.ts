import { PrismaAdapter } from "@lucia-auth/adapter-prisma";
import { Lucia, TimeSpan } from "lucia";
import { prisma } from "./database";

const adapter = new PrismaAdapter(prisma.session, prisma.user);

export const lucia = new Lucia(adapter, {
    sessionExpiresIn: new TimeSpan(2, "w"),
    sessionCookie: {
      name: "session",
      attributes: {
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
      }
    },
  });

declare module "lucia" {
	interface Register {
		Auth: typeof lucia;
	}
}