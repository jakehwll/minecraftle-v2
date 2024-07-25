import { Hono } from "hono";
import {
  InteractionResponseType,
  InteractionType,
  verifyKey,
} from "discord-interactions";

const app = new Hono();

app.get("/interaction", (c) => {
  return c.json({
    message: "Hello, World!",
  });
});

app.post("/interaction", async (c) => {
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

  const message = await c.req.json();

  if (message.type === InteractionType.PING) {
    return c.json({
      type: InteractionResponseType.PONG,
    });
  }
});

export default {
  port: process.env.PORT || 3000,
  fetch: app.fetch,
};
