import { verifyKey } from "discord-interactions";
import { createMiddleware } from "hono/factory";

export const discordInteraction = createMiddleware(async (c, next) => {
  const signature = c.req.header("x-signature-ed25519");
  const timestamp = c.req.header("x-signature-timestamp");

  if (!signature || !timestamp) {
    return c.json(
      {
        message: "Invalid request signature",
      },
      401
    );
  }

  const valid = await verifyKey(
    await c.req.text(),
    signature,
    timestamp,
    process.env.DISCORD_AUTH_PUBLIC_KEY ?? ""
  );

  if (!valid) {
    return c.json(
      {
        error: "Invalid request signature",
      },
      401
    );
  }
  
  await next();
});
