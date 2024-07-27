import {
  type APIInteractionResponse,
  type APIMessageComponentInteraction,
} from "discord-api-types/v10";

export class Command {
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
