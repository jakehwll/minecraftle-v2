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

export const discord = new Discord(
  process.env.DISCORD_AUTH_CLIENT_ID ?? "",
  process.env.DISCORD_AUTH_CLIENT_SECRET ?? "",
  process.env.DISCORD_AUTH_CALLBACK_URL ?? ""
);
