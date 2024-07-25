import { Hono } from "hono";
import { discordInteraction } from "./middleware/discordInteraction";
import { logger } from "hono/logger";
import {
  InteractionType,
  InteractionResponseType,
  type APIInteractionResponseChannelMessageWithSource,
} from "discord-api-types/v10";

const app = new Hono();

app.use("*", logger());
app.use("*", discordInteraction);

declare global {
  var hot: boolean;
}

const COMMANDS: {
  name: string;
  description: string;
  callback: () => void;
}[] = [
  {
    name: "help",
    description: "Replies with some help!",
    callback: () => {
      console.log("help");
    },
  },
];

const DEVELOPMENT_GUILD_ID = process.env.DISCORD_AUTH_BOT_GUILD_ID;
const LOCAL_COMMANDS = `https://discord.com/api/v9/applications/${process.env.DISCORD_AUTH_CLIENT_ID}/guilds/${DEVELOPMENT_GUILD_ID}/commands`;
const GLOBAL_COMMANDS = `https://discord.com/api/v9/applications/${process.env.DISCORD_AUTH_CLIENT_ID}/commands`;

const UPLOAD_COMMANDS = async () => {
  await fetch(
    process.env.NODE_ENV === "development" ? LOCAL_COMMANDS : GLOBAL_COMMANDS,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bot ${process.env.DISCORD_AUTH_BOT_TOKEN}`,
      },
      method: "PUT",
      body: JSON.stringify(
        COMMANDS.map(({ callback, ...rest }) => ({ ...rest }))
      ),
    }
  ).then((res) => {
    res.status === 200
      ? console.log("Commands uploaded!", process.env.NODE_ENV)
      : console.log(
          "Error uploading commands!",
          res.status,
          process.env.NODE_ENV
        );
  });
};

if (!globalThis.hot) {
  globalThis.hot ??= true;
  await UPLOAD_COMMANDS();
}

app.post("/interaction", async (c) => {
  const message = await c.req.json();

  if (message.type === InteractionType.Ping) {
    return c.json({
      type: InteractionResponseType.Pong,
    });
  } else {
    const response: APIInteractionResponseChannelMessageWithSource = {
      type: InteractionResponseType.ChannelMessageWithSource,
      data: {
        tts: false,
        content: "Hello, world!",
        embeds: [],
        allowed_mentions: { parse: [] },
      },
    };
    return c.json(response);
  }
});

export default {
  port: process.env.PORT || 3000,
  fetch: app.fetch,
};
