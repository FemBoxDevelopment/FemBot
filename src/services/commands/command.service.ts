import fs from 'fs';
import { Message, EmbedBuilder, CommandInteraction, AutocompleteInteraction } from 'discord.js';
import { Command, CommandContext } from '../../interfaces/command';
import Log from '../../utils/log';
import Deps from '../../utils/deps';
import { GuildDocument } from '../../data/models/guild';
import Validators from './validators';
import { promisify } from 'util';
import { bot } from '../../bot';
import Emit from '../emit';

const readdir = promisify(fs.readdir);

export default class CommandService {
  public readonly commands = new Map<string, Command>();
  public readonly slashCommands = []; 

  constructor(
    private emit = Deps.get<Emit>(Emit),
    private validators = Deps.get<Validators>(Validators),
  ) {}

  public async init() {
    const files = await readdir('./src/commands');
    
    for (const fileName of files) {
      const cleanName = fileName.replace(/(\..*)/, '');
      
      const { default: Command } = await import(`../../commands/${cleanName}`);
      if (!Command) continue;
      
      const command: Command = new Command();
      this.commands.set(command.name, command);
      
      if(command.isSlashCommand) {
        this.slashCommands.push(command.slashCommandData.toJSON())
      }
    }

    this.registerCommands();
  }

  private async registerCommands() {
    if((/true/i).test(process.env.PRODUCATION)) {
      if(!process.env.TEST_SERVER)
        return Log.error('Unable to load slash commands', 'cmds');

      bot.guilds.cache.get(process.env.TEST_SERVER)?.commands.set(this.slashCommands);
      
    } else {
      bot.application.commands.set(this.slashCommands);
    };

    Log.info(`Loaded: ${this.slashCommands.length} slash commands`, `cmds`);

    Log.info(`Loaded: ${this.commands.size} commands`, `cmds`);
  }

  public async handle(interaction: Message | CommandInteraction | AutocompleteInteraction, savedGuild: GuildDocument) {
    try {
      if(interaction instanceof CommandInteraction) {
        if(!interaction.isCommand()) return;

        const command = this.commands.get(interaction.commandName);
        if (!command) return;

        await command.slashCommandExecute(interaction);
        
        return this.emit.InteractionExecuted(interaction);
      }

      if(interaction instanceof AutocompleteInteraction) {
        if(!interaction.isAutocomplete()) return;

        const command = this.commands.get(interaction.commandName);
        if(!command) return;

        return await command.slashCommandExecute(interaction);
      }

      const prefix = savedGuild.general.prefix
      let slicedContent = interaction.content.slice(prefix.length);

      if(interaction.mentions.users.first()) {
        if(interaction.mentions.users.first().id == interaction.client.user.id) {
          if(
            interaction.content.startsWith(`<@!${interaction.mentions.users.first().id}>`) || 
            interaction.content.startsWith(`<@!${interaction.mentions.users.first().id}> `)) {
              slicedContent = interaction.content.slice(`<@!${interaction.mentions.users.first().id}>`.length);
          }      
        }
      }

      const command = this.findCommand(slicedContent, savedGuild);
      const customCommand = this.findCustomCommand(slicedContent, savedGuild);

      if (!command && !customCommand) return;

      this.validators.checkChannel(interaction.channel as any, savedGuild, customCommand);        
      this.validators.checkCommand(command, savedGuild, interaction);
      this.validators.checkPreconditions(command, interaction.member);

      const ctx = new CommandContext(interaction, savedGuild, command);
      await command.execute(ctx, ...this.getCommandArgs(slicedContent, savedGuild));

      this.emit.commandExecuted(ctx);
      return command;

    } catch (error) {
      const content = (error as Error)?.message ?? 'unknown error occurred.';
      const footer = content.split('/&*footer/')[1];
      const text = content.split('/&*footer/')[0].length > 5 ? content.split('/&*footer/')[0] : content.split('/&*footer/')[1]

      const embed = new EmbedBuilder()
      .setColor('Red')
      .setDescription(`> ⚠️ - ${text}`)
      .setAuthor({ name: 'An Error Occurred', iconURL: 'https://images-ext-2.discordapp.net/external/62J2SiHTggRlGa6fXltfhqS5Aa6Bpqhdn_QvvIVQsI4/%3Fv%3D1/https/cdn.discordapp.com/emojis/695631398718930997.png'})
      .setFooter({ text: footer })      
      if(interaction instanceof AutocompleteInteraction)
        return
      else await interaction.reply({ embeds: [embed] })
    }
  }

  private findCommand(slicedContent: string, savedGuild: GuildDocument) {
    const name = this.getCommandName(slicedContent);
    return this.commands.get(name)
      ?? this.findByAlias(name)
      ?? this.commands.get(
        this.findCustomCommand(name, savedGuild)?.command
      );
  }
  private findByAlias(name: string) {   
    return Array
      .from(this.commands.values())
      .find(c => c.aliases?.some(a => a === name));
  }
  private findCustomCommand(slicedContent: string, savedGuild: GuildDocument) {
    const name = this.getCommandName(slicedContent);
    return savedGuild.commands.custom
      ?.find(c => c.alias === name);    
  }

  private getCommandArgs(slicedContent: string, savedGuild: GuildDocument) {
    const customCommand = this.findCustomCommand(slicedContent, savedGuild)?.command;
    return (customCommand ?? slicedContent)
      .split(' ')
      .slice(1);
  }
  private getCommandName(slicedContent: string) {
    return slicedContent
      ?.toLowerCase()
      .split(' ')[0];
  }
  
}