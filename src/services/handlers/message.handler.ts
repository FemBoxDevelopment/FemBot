
import { Message, EmbedBuilder, TextChannel, TextBasedChannel, Events, messageLink } from 'discord.js';
import Guilds from '../../data/guilds';
import Event from '../../interfaces/event';
import Deps from '../../utils/Deps';
import CommandService from '../commands/command.service';

export default class MessageHandler implements Event {
  on = Events.MessageCreate;

  constructor(
    private guilds = Deps.get<Guilds>(Guilds),
    private commands = Deps.get<CommandService>(CommandService),
  ) {}

  async invoke(msg: Message) {

    try {
        if (!msg.member || msg.author.bot) return;

        const savedGuild = await this.guilds.get(msg.guildId);
        const isCommand = msg.content.toLowerCase().startsWith(savedGuild.general.prefix)

        if(isCommand || msg.content.startsWith(`<@!${msg.client.user.id}>`)) {
          const command = await this.commands.handle(msg, savedGuild);
          if (!command) return;
          
          // return await this.logs.logCommand(msg, command);
        }

    } catch (e) {}
  }
}