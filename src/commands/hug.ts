import { Command, CommandContext, Permission } from '../interfaces/command';
import Discord, { CommandInteraction, User, AutocompleteInteraction, EmbedBuilder } from 'discord.js'
import { SlashCommandBuilder } from '@discordjs/builders'
import neko from 'nekos.life'

export default class HugCommand implements Command {
  name = 'hug';
  summary = 'hug a user in the guild';
  cooldown = 5;
  usage = "hug [user]"
  module = 'action';
  isSlashCommand = true;

  slashCommandData = new SlashCommandBuilder()
    .setName(this.name)
    .setDescription(`${this.summary} 💖`)
    .addUserOption(option => option.setName('user').setRequired(true).setDescription('The user to hug'))
    
  slashCommandExecute = async(interaction: CommandInteraction | AutocompleteInteraction) => {
    if (interaction.isAutocomplete()) return;

    const user = interaction.options.getUser('user');

    if(user.id == interaction.user.id) 
      return interaction.reply({ content: '❌', ephemeral: true });

    await interaction.reply({ embeds: [await this.embed(interaction.user, user)] });
  }

  embed = async(sender: User, mention: User) => {
    const hug = new neko().hug()
    const embed = new EmbedBuilder()

    .setImage((await hug).url)
    .setColor('#cf71af')
    .setDescription(`<@${sender.id}> hugged <@${mention.id}>`)
    .setFooter({
        text: 'Powered by Nekos.life',
        iconURL: 'https://i.imgur.com/xMEz9fl.png'
    })

    return embed;
  }
  
  execute = async(message: CommandContext) => {
    let mention = message.message.mentions.users.first()

    if(!mention) {
      return message.message.reply(`Hey <@${message.author.id}> you need to mention someone!`)
    }

    if(mention.id == message.author.id) {
      return message.message.reply({ content: `someone ${this.name} <@${message.author.id}> 🥺` })
    }

    return message.message.reply({embeds: [await this.embed(message.user, mention)]}).then(() => message.message.react('💞'))
  }
}