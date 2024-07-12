import { LoaderFunctionArgs } from "@remix-run/node";
import { Form, redirect } from "@remix-run/react";
import { initializeLucia } from "~/utils/lucia";
import crypto from "crypto";

globalThis.crypto = crypto as Crypto

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const lucia = initializeLucia();
  const cookie = request.headers.get("Cookie");
  if (!cookie) {
    return { user: null, session: null };
  }
  const sessionId = lucia.readSessionCookie(cookie);
  if (!sessionId) {
    return { user: null, session: null };
  }

  const { user, session } = await lucia.validateSession(sessionId);
  if (user) {
    return redirect("/");
  }

  return { user, session };
};

export default function Login() {
  return (
    <Form method="post" action="/auth/discord">
      <button>
        <span>Login with Discord</span>
      </button>
    </Form>
  );
}
