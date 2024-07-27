import { Hono } from "hono";
import { discordInteraction } from "./middleware/discordInteraction";
import { logger } from "hono/logger";
import {
  InteractionType,
  InteractionResponseType,
} from "discord-api-types/v10";
import { _totalGames, _wonGames, _lostGames } from "./utils/statistics";
import { Interaction } from "./helpers/interaction";
import { Command } from "./helpers/command";
import { prisma } from "./utils/database";

const app = new Hono();

app.use("*", logger());
app.use("*", discordInteraction);

const interaction = new Interaction();

interaction.push(
  new Command({
    name: "stats",
    description: "Checks your Minecraftle statistics!",
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
              ],
            },
          ],
        },
      };
    },
  })
);

app.post("/interaction", async (c) => {
  const message = await c.req.json();

  if (message.type === InteractionType.Ping) {
    return c.json({
      type: InteractionResponseType.Pong,
    });
  }

  if (message.type === InteractionType.ApplicationCommand) {
    const command = interaction.commands.find(
      (command) => command.name === message.data.name
    );
    const res = await command?.callback(message);

    if (res) {
      return c.json(res);
    } else {
      return c.json({ error: "Command not found" }, 404);
    }
  }
});


declare global {
  var hot: boolean;
}

if (!global.hot) {
  global.hot = true;
  await interaction.upload()
}

export default {
  port: process.env.PORT || 3000,
  fetch: app.fetch,
};
