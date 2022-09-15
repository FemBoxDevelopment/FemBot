import { Command, CommandContext, Permission } from '../interfaces/command';
import Discord, { CommandInteraction, EmbedBuilder, User } from 'discord.js'
import { SlashCommandBuilder } from '@discordjs/builders';
import Members from '../data/members';
import Deps from '../utils/deps';
import Guilds from '../data/guilds';

export default class BalanceCommand implements Command {
    name = 'balance';
    summary = 'View your balance!';
    precondition: Permission = '';
    aliases = [ 'bal' ];
    module = 'economy';
    isSlashCommand = true;

    constructor(
        private members = Deps.get<Members>(Members),
        private guilds = Deps.get<Guilds>(Guilds),
    ) {}

    slashCommandData = new SlashCommandBuilder()
        .setName(this.name)
        .setDescription(this.summary)
        .addUserOption(opt => opt.setName('user').setRequired(false).setDescription('The user to check the balance of'))

    slashCommandExecute = async(interaction: CommandInteraction) => {
        const guild = await this.guilds.get(interaction.guildId);
        const currencyName = guild.shop.currency.name.charAt(0).toUpperCase() + guild.shop.currency.name.slice(1); 

        let user = interaction.options.getUser('user');

        if(!user || user.bot)
            user = interaction.user

        const member = interaction.guild.members.cache.get(user.id);
        
        let balance = await this.members.getBalance(member);

        let embed = new EmbedBuilder()
        .setColor('#dd2e45')
        .setAuthor({ name: `${user.tag}`, iconURL: user.displayAvatarURL()})
        .setDescription(`\`${balance}\` ${guild.shop.currency.icon} | **${currencyName}**`)

        interaction.reply({ embeds: [embed] })


    }
    
    execute = async (message: CommandContext, ...args: string[]) =>{
        const guild = await this.guilds.get(message.guildId);
        const currencyName = guild.shop.currency.name.charAt(0).toUpperCase() + guild.shop.currency.name.slice(1); 

        let embed = new EmbedBuilder()
        .setColor('#dd2e45')
        .setAuthor({ name: `${message.author.tag}`, iconURL: message.author.displayAvatarURL() })

        let balance = 
            await this.members.getBalance(message.member);

        if(message.message.mentions.users.first()) {
            const mention = message.guild.members.cache.get(message.message.mentions.users.first().id);

            if(mention.user.bot)
                throw new TypeError('Bots do not have accounts.')

            balance = await this.members.getBalance(mention);
            embed.setDescription(`\`${balance}\` ${guild.shop.currency.icon} | **${currencyName}**`)
            .setAuthor({ name: `${mention.user.tag}`, iconURL: mention.user.displayAvatarURL() })
        } else embed.setDescription(`\`${balance}\` ${guild.shop.currency.icon} | **${currencyName}**`);

        return message.message.reply({ embeds: [embed] });

    }
}