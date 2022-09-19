import { Command, CommandContext, Permission } from '../../interfaces/command';
import Discord, { CommandInteraction, User, AutocompleteInteraction, EmbedBuilder, SlashCommandBuilder } from 'discord.js'
import neko from 'nekos.life'

export default class HeadPatCommand implements Command {
  name = 'headpat';
  aliases = ["pat"]
  summary = 'give headpats to users in the guild';
  cooldown = 5;
  usage = "headpat [user]"
  module = 'action';
  isSlashCommand = true;

  slashCommandData = new SlashCommandBuilder()
    .setName(this.name)
    .setDescription(`${this.summary} 🤗`)
    .addUserOption(option => option.setName('user').setRequired(true).setDescription('The user to headpat'));

  slashCommandExecute = async(interaction: CommandInteraction | AutocompleteInteraction) => {
    if (interaction.isAutocomplete()) return;
    const user = interaction.options.getUser('user');

    await interaction.reply({ embeds: [await this.embed(interaction.user, user)] });
  }

  embed = async(sender: User, mention: User) => {
    const headpat = new neko().pat()
    return new EmbedBuilder()
    .setImage((await headpat).url)
    .setColor('#cf71af')
    .setDescription(`<@${sender.id}> gave headpats to <@${mention.id}>`)
    .setFooter({
        text: 'Powered by Nekos.life',
        iconURL: 'https://i.imgur.com/xMEz9fl.png'
    })
  }
  
  execute = async(message: CommandContext) => {
    let mention = message.message.mentions.users.first()

    if(!mention) {
      return message.message.reply(`Hey <@${message.author.id}> you need to mention someone!`)
    }

    if(mention.id == message.author.id) {
      return message.message.reply({ content: `someone gib ${this.name}s to <@${message.author.id}>? 🥺` })
    }

    return message.message.reply({ embeds: [await this.embed(message.author, mention)] })
  }
}