import { Discord } from "arctic";

export interface Profile {
  id: string;
  username: string;
  avatar: string;
  discriminator: string;
  public_flags: number;
  flags: number;
  banner: string;
  accent_color: number;
  global_name: string;
  avatar_decoration_data: {
    asset: string;
    sku_id: string;
  };
  banner_color: string;
  mfa_enabled: boolean;
  locale: string;
  premium_type: number;
  email: string;
  verified: boolean;
}

let discord: Discord | null = null;

export const initializeArcticDiscord = () => {
  if (discord) return discord;
  const {
    DISCORD_AUTH_CLIENT_ID: clientId,
    DISCORD_AUTH_CLIENT_SECRET: clientSecret,
    DISCORD_AUTH_CALLBACK_URL: redirectURI,
  } = process.env;
  discord = new Discord(clientId ?? "", clientSecret ?? "", redirectURI ?? "");
  return discord;
};
