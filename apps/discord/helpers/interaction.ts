import { Command } from "./command";

const DISCORD_AUTH_BOT_TOKEN = process.env.DISCORD_AUTH_BOT_TOKEN;
const DISCORD_AUTH_BOT_GUILD_ID = process.env.DISCORD_AUTH_BOT_GUILD_ID;
const DISCORD_COMMANDS_ENDPOINTS = {
  local: `https://discord.com/api/v10/applications/${process.env.DISCORD_AUTH_CLIENT_ID}/guilds/${DISCORD_AUTH_BOT_GUILD_ID}/commands`,
  global: `https://discord.com/api/v10/applications/${process.env.DISCORD_AUTH_CLIENT_ID}/commands`,
};

export class Interaction {
  commands: Command[];

  constructor() {
    this.commands = [];
  }

  push = (command: Command) => {
    this.commands.push(command);
  };

  upload = async () => {
    await fetch(
      process.env.NODE_ENV === "development"
        ? DISCORD_COMMANDS_ENDPOINTS.local
        : DISCORD_COMMANDS_ENDPOINTS.global,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bot ${DISCORD_AUTH_BOT_TOKEN}`,
        },
        method: "PUT",
        body: JSON.stringify(
          this.commands.map(({ callback, ...rest }) => ({ ...rest }))
        ),
      }
    ).then((res) => {
      res.status === 200
        ? console.log({
          message: "Commands uploaded!",
          status: res.status,
          process: process.env.NODE_ENV,
        })
        : console.log({
          message: "Commands failed uploading!",
          status: res.status,
          process: process.env.NODE_ENV,
        });
    });
  };
}
