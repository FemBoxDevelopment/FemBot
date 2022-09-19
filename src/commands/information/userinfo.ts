import { AutocompleteInteraction, CacheType, CommandInteraction, EmbedBuilder, GuildMember, Message, SlashCommandBuilder } from 'discord.js';
import { Command, CommandContext, Permission } from '../../interfaces/command';
import { getMemberFromMention } from '../../utils/command-utils';

export default class UserInfoCommand implements Command {
    name = 'userinfo';
    summary = 'View information about a user.';
    precondition: Permission = '';
    cooldown = 3;
    module = 'Auto-mod';
    isSlashCommand = true;

    slashCommandData = new SlashCommandBuilder()
        .setName(this.name)
        .setDescription(this.summary)
        .addUserOption(opt => opt.setName('user').setDescription('User to get information about').setRequired(true))

    slashCommandExecute = (interaction: CommandInteraction<CacheType> | AutocompleteInteraction<CacheType>) => {
        if(interaction.isAutocomplete())
            return;

        const user = interaction.options.getUser('user')
        const member = getMemberFromMention(user.id, interaction.guild);

        this.main(interaction, member)
    }

    execute = async(message: CommandContext, ...args: string[]) => this.main(message.message, getMemberFromMention(args[0] ?? message.member.id, message.guild))

    private main(interaction: CommandInteraction | Message, member: GuildMember) {
        const embed = new EmbedBuilder()
        .setAuthor({ name: `${member.user.tag}`, iconURL: member.user.avatarURL()})
        .addFields([
            {
                name: 'Joined Server',
                value: `\`${this.formatDate(member.joinedAt)}\` \nat \`${member.joinedAt.toLocaleTimeString()}\``
            },
            {
                name: 'Created On',
                value: `\`${member.user.createdAt.toLocaleDateString()}\` \nat \`${member.user.createdAt.toLocaleTimeString()}\``,
                inline: true
            }
        ])

        const highestRole = member.roles.cache.sort((a, b) => b.position - a.position).first();
        const rolesLength = member.roles.cache.map(r => r.name).length;

        embed.addFields([
            {
                name: `Roles (${rolesLength - 1} total)`,
                value: `User highest role \n<@&${highestRole}>`,
                inline: false
            },
        ])

        return interaction.reply({ embeds: [embed] });
    }

    private formatDate(date: Date) {
        return new Intl.DateTimeFormat("en-US").format(date);
    }
}