import { Command, CommandContext, Permission } from '../interfaces/command';
import Discord, { CommandInteraction, User, AutocompleteInteraction, EmbedBuilder, SlashCommandBuilder } from 'discord.js'
import neko from 'nekos.life'

export default class CuddleCommand implements Command {
  name = 'slap';
  summary = 'slap someone in the guild';
  usage = "slap [user]"
  module = 'action';
  isSlashCommand = true;

  slashCommandData = new SlashCommandBuilder()
    .setName(this.name)
    .setDescription(`${this.summary} 🤗`)
    .addUserOption(option => option.setName('user').setRequired(true).setDescription('The user to slap with'));

  slashCommandExecute = async(interaction: CommandInteraction | AutocompleteInteraction) => {
    if (interaction.isAutocomplete()) return;
    const user = interaction.options.getUser('user');

    await interaction.reply({ embeds: [await this.embed(interaction.user, user)] });
  }

  embed = async(sender: User, mention: User) => {
    const cuddle = new neko().slap()
    return new EmbedBuilder()
    .setImage((await cuddle).url)
    .setColor('#cf71af')
    .setFooter({text: 'Powered By Nekos.life', iconURL: 'https://i.imgur.com/xMEz9fl.png'})
    .setDescription(`<@${sender.id}> slapped <@${mention.id}>`)
  }
  
  execute = async(message: CommandContext) => {
    let mention = message.message.mentions.users.first()

    if(!mention) {
      return message.message.reply(`Hey <@${message.author.id}> you need to mention someone!`)
    }

    if(mention.id == message.author.id) {
      return message.message.reply({ content: `someone ${this.name} <@${message.author.id}> 🥺` })
    }
    return message.message.reply({embeds: [await this.embed(message.user, mention)]}).then(() => message.message.react('🤚'))
  }
}