import { Command, CommandContext, Permission } from '../../interfaces/command';
import Deps from '../../utils/Deps';
import Discord, { AutocompleteInteraction, CommandInteraction, Guild, SlashCommandBuilder } from 'discord.js';

import Guilds from '../../data/guilds';
import { defaultPrefix, GuildDocument } from '../../data/models/guild';

export default class PrefixCommand implements Command {
  name = 'prefix';
  usage = 'prefix [New Prefix]';
  summary = 'Set a different prefix in a guild';
  module = 'Auto-mod';
  precondition: Permission = 'Administrator';
  isSlashCommand = true;

  constructor(private guilds = Deps.get<Guilds>(Guilds)) {}

  slashCommandData = new SlashCommandBuilder()
    .setName(this.name)
    .addStringOption((option) => option.setName('prefix').setRequired(false).setDescription('The new prefix'))
    .setDescription(this.summary);

  slashCommandExecute = async (interaction: CommandInteraction | AutocompleteInteraction) => {
    if (interaction.isAutocomplete()) return;
    const SavedGuild = await this.guilds.get((interaction.guild as any).id);

    const newPrefix = interaction.options.get('prefix').value.toString();
    const oldPrefix = SavedGuild.general.prefix;

    if (newPrefix && newPrefix.length < 4) {
      SavedGuild.general.prefix = newPrefix;
      await SavedGuild.updateOne(SavedGuild);

      return interaction.reply({ content: `Prefix set to \`${newPrefix}\` 👌`, ephemeral: true }).then(() => {
        this.changeNickname(interaction.guild, newPrefix, oldPrefix);
      });
    }

    return await interaction.reply({ content: `The prefix for ${(interaction.guild as any).name} is \`${SavedGuild.general.prefix}\`` });
  };

  execute = async (message: CommandContext, ...args: string[]) => {
    const SavedGuild = await this.guilds.get((message.guild as any).id);

    const oldPrefix = SavedGuild.general.prefix;

    if (!message.member.permissions.has(['Administrator']) || args[0] == SavedGuild.general.prefix || args[0].length > 4) return message.message.react('❌');

    SavedGuild.general.prefix = args[0];
    await SavedGuild.updateOne(SavedGuild);

    return message.message.react('👌').then(() => {
      this.changeNickname(message.guild, args[0], oldPrefix);
    });
  };

  changeNickname(guild: Guild, newPrefix: string, oldPrefix: string) {
    if (guild.members.me.nickname && !guild.members.me.nickname.startsWith(`[${oldPrefix}]`)) return;

    if (newPrefix == defaultPrefix) return guild.members.me.setNickname(null);

    guild.members.me.setNickname(`[${newPrefix}] ${guild.members.me.user.username}`);
  }
}
