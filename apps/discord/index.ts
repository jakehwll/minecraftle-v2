import { Hono } from "hono";
import { discordInteraction } from "./middleware/discordInteraction";
import { logger } from "hono/logger";
import {
  InteractionType,
  InteractionResponseType,
  type APIInteractionResponse,
  type APIMessageComponentInteraction,
} from "discord-api-types/v10";
import { prisma } from "./utils/database";
import { _totalGames, _wonGames, _lostGames } from "./utils/statistics";

const app = new Hono();

app.use("*", logger());
app.use("*", discordInteraction);

declare global {
  var hot: boolean;
}

class Command {
  name: string;
  description: string;
  type?: null;
  callback: (
    args: APIMessageComponentInteraction
  ) => Promise<APIInteractionResponse>;

  constructor({
    name,
    description,
    type,
    callback,
  }: {
    name: string;
    description: string;
    type?: null;
    callback: (
      args: APIMessageComponentInteraction
    ) => Promise<APIInteractionResponse>;
  }) {
    this.name = name;
    this.description = description;
    this.type = type;
    this.callback = callback;
  }
}

const COMMANDS: {
  name: string;
  description: string;
  callback: (
    args: APIMessageComponentInteraction
  ) => Promise<APIInteractionResponse>;
}[] = [
  new Command({
    name: "stats",
    description: "Replies with pong!",
    callback: async ({ member }) => {
      if (!member || !member.user) {
        return {
          type: InteractionResponseType.ChannelMessageWithSource,
          data: {
            content: `Something went wrong!`,
          },
        };
      }

      const [totalGames, wonGames, lostGames] = await prisma.$transaction([
        _totalGames(member.user.id),
        _wonGames(member.user.id),
        _lostGames(member.user.id),
      ]);

      return {
        type: InteractionResponseType.ChannelMessageWithSource,
        data: {
          content: `\`${member.user.username}\`.`,
          embeds: [
            {
              title: "Statistics",
              fields: [
                {
                  name: "Total games",
                  value: `\`${totalGames}\``,
                  inline: true,
                },
                {
                  name: "Won games",
                  value: `\`${wonGames}\``,
                  inline: true,
                },
                {
                  name: "Lost games",
                  value: `\`${lostGames}\``,
                  inline: true,
                },
              ]
            },
          ],
        },
      };
    },
  }),
];

const DEVELOPMENT_GUILD_ID = process.env.DISCORD_AUTH_BOT_GUILD_ID;

const COMMANDS_ENDPOINT = {
  local: `https://discord.com/api/v10/applications/${process.env.DISCORD_AUTH_CLIENT_ID}/guilds/${DEVELOPMENT_GUILD_ID}/commands`,
  global: `https://discord.com/api/v10/applications/${process.env.DISCORD_AUTH_CLIENT_ID}/commands`,
};

const UPLOAD_COMMANDS = async () => {
  await fetch(
    process.env.NODE_ENV === "development"
      ? COMMANDS_ENDPOINT.local
      : COMMANDS_ENDPOINT.global,
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
  }

  if (message.type === InteractionType.ApplicationCommand) {
    const command = COMMANDS.find(
      (command) => command.name === message.data.name
    )
    const res = await command?.callback(message);

    if (res) {
      return c.json(res);
    } else {
      return c.json({ error: "Command not found" }, 404);
    }
  }
});

export default {
  port: process.env.PORT || 3000,
  fetch: app.fetch,
};
