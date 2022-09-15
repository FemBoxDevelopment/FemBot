import { bot, emitter } from "../bot";
import Log from "../utils/log";
import fs from "fs";
import { promisify } from "util";
import Event from "../interfaces/event";
import ButtonService from "./commands/button.service";
import Guilds from "../data/guilds";
import CommandService from "./commands/command.service";
import Deps from "../utils/Deps";
import { Events } from "discord.js";

const readdir = promisify(fs.readdir);

export default class EventsService {
  private readonly handlers: Event[] = [];
  private readonly customHandlers: Event[] = [];

  constructor(
    private commands = Deps.get<CommandService>(CommandService),
    private guilds = Deps.get<Guilds>(Guilds),
    private button = Deps.get<ButtonService>(ButtonService)
  ) {}

  async init() {
    const handlerFiles = await readdir(`${__dirname}/handlers`);
    const customHandlerFiles = await readdir(`${__dirname}/custom-handlers`);

    for (const file of handlerFiles) {
      const { default: Handler } = await import(`./handlers/${file}`);
      const handler = Handler && new Handler();
      if (!handler?.on) continue;

      this.handlers.push(new Handler());
    }
    for (const file of customHandlerFiles) {
      const { default: Handler } = await import(`./custom-handlers/${file}`);
      const handler = Handler && new Handler();
      if (!handler?.on) continue;

      this.customHandlers.push(new Handler());
    }
    this.hookEvents();
  }

  private hookEvents() {
    for (const handler of this.handlers) {
      if (handler.on == Events.InteractionCreate) {
        bot.on(handler.on, async (interaction) => {
          try {
            const savedGuild = await this.guilds.get(interaction.guildId);

            if (interaction.isButton()) return this.button.handle(interaction);

            if (interaction.isCommand())
              await this.commands.handle(interaction, savedGuild);
          } catch (e) {}
        });
      }
      if(handler.on == Events.MessageCreate) {
        bot.on(handler.on, async(msg) => {
            try {
                if (!msg.member || msg.author.bot) return;
        
                const savedGuild = await this.guilds.get(msg.guildId);
                const isCommand = msg.content.toLowerCase().startsWith(savedGuild.general.prefix)
        
                if(isCommand || msg.content.startsWith(`<@!${msg.client.user.id}>`)) {
                  const command = await this.commands.handle(msg, savedGuild);
                  if (!command) return;
                }
            } catch (e) {}
        })
      }
      bot.on(handler.on, (...args) => handler.invoke(...args));
    }

    for (const handler of this.customHandlers)
      emitter.on(handler.on, (...args) => handler.invoke(...args));

    Log.info(`Loaded: ${this.handlers.length} handlers`, "events");
    Log.info(`Loaded: ${this.customHandlers.length} custom handlers`, "events");
  }
}
