import { redirect } from "react-router";
import { generateCodeVerifier, generateState } from "arctic";
import { serializeCookie } from "oslo/cookie";
import { discord } from "~/utils/discord";

export const action = async () => {
  const state = generateState();
  const codeVerifier = generateCodeVerifier();

  const url: URL = await discord.createAuthorizationURL(state, {
    scopes: ["identify", "email"],
  })

  return redirect(url.toString(), {
    headers: [
      [
        "Set-Cookie",
        serializeCookie("state", state, {
          httpOnly: true,
          secure: import.meta.env.NODE_ENV === "production",
          maxAge: 60 * 10,
          path: "/",
        }),
      ],
      [
        "Set-Cookie",
        serializeCookie("code_verifier", codeVerifier, {
          httpOnly: true,
          secure: import.meta.env.NODE_ENV === "production",
          maxAge: 60 * 10,
          path: "/",
        }),
      ],
    ],
  });
};

export default function Empty() {
  return null;
}
