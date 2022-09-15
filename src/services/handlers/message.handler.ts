
import { Message, EmbedBuilder, TextChannel, TextBasedChannel, Events, messageLink } from 'discord.js';
import Guilds from '../../data/guilds';
import Event from '../../interfaces/event';
import AutoMod from '../../modules/auto-mod/auto-mod';
import Leveling from '../../modules/xp/leveling';
import Deps from '../../utils/Deps';
import CommandService from '../commands/command.service';

export default class MessageHandler implements Event {
  on = Events.MessageCreate;

  constructor(
    private guilds = Deps.get<Guilds>(Guilds),
    private commands = Deps.get<CommandService>(CommandService),
    private leveling = Deps.get<Leveling>(Leveling),
    private autoMod = Deps.get<AutoMod>(AutoMod),
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

      if (savedGuild.autoMod.enabled) {
        try {
          await this.autoMod.validate(msg, savedGuild);
        } catch (validation) {
          await msg.reply(`> ${(validation as Error).message}`);
        }
      }
      if (savedGuild.leveling.enabled){
        try {
          await this.leveling.validateXPMsg(msg, savedGuild);
  
        } catch {}
        
      }

    } catch (e) {}
  }
}