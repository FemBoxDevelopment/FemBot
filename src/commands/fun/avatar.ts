import { Command, CommandContext } from '../../interfaces/command';
import { EmbedBuilder, CommandInteraction, User, AutocompleteInteraction } from 'discord.js'
import { SlashCommandBuilder } from '@discordjs/builders'
 
export default class AvatarCommand implements Command {
  name = 'avatar';
  summary = 'Get a users avatar.';
  usage = 'avatar [user]'
  module = 'info';
  isSlashCommand = true;

  slashCommandData = new SlashCommandBuilder()
    .setName(this.name)
    .setDescription(`${this.summary}`)
    .addUserOption(option => option.setName('user').setRequired(true).setDescription('The user to get the avatar of'));
  
  slashCommandExecute = async(interaction: AutocompleteInteraction | CommandInteraction) => {
    if(interaction.isAutocomplete()) return

    const user = interaction.options.getUser('user');

    await interaction.reply({ embeds: [this.embed(interaction.user, user)], allowedMentions: { repliedUser: false } });
  }

  embed(sender: User, mention: User) {
    return new EmbedBuilder()
    .setAuthor({ name: mention.tag, iconURL: mention.avatarURL()})
    .setTitle(`Avatar Link`)
    .setURL(`${mention.avatarURL()}?size=1024`)
    .setImage(`${mention.avatarURL()}?size=1024`)
    .setFooter({ text: `Requested by ${sender.username}#${sender.discriminator} | Powered By Discord`, iconURL: 'https://i.imgur.com/ozEVVvb.png'})

  }
  
  execute = (message: CommandContext) =>{
    const mention = message.message.mentions.users.first() || message.author;

    message.message.reply({ embeds: [this.embed(message.author, mention)], allowedMentions: { repliedUser: false } });
  }
}
 