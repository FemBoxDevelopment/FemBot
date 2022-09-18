import { Command, CommandContext, Permission } from '../interfaces/command';
import Deps from '../utils/deps';
import AutoMod from '../modules/auto-mod/auto-mod';
import { getMemberFromMention } from '../utils/command-utils';
import Discord, { AutocompleteInteraction, Client, CommandInteraction } from 'discord.js'
import { SlashCommandBuilder } from '@discordjs/builders';

export default class BanCommand implements Command {
    name = 'ban';
    usage = 'ban [user/id] [reason]'
    aliases = ["ban", "ban-id", "ban_id"];
    summary = `Ban a member with username or id`;
    precondition: Permission = 'BanMembers';
    cooldown = 3;
    module = 'Auto-mod';
    // isSlashCommand = true;

    // slashCommandData = new SlashCommandBuilder()
    //     .setName("ban")
    //     .setDescription(`${this.summary}`)
    //     .addMentionableOption(opt => opt.setName('user').setRequired(true).setDescription('The user to ban'))
    //     .addStringOption(opt => opt.setName('reason').setRequired(true).setDescription('The reason for the ban'))
    
    // slashCommandExecute = async(interaction: CommandInteraction | AutocompleteInteraction) => {
    //     if(interaction.isAutocomplete()) return;
    //     const user = interaction.options.getUser('user');
    //     const reason = interaction.options.get('reason').value.toString();
    
    //     const member = this.autoMod.getMember(user, interaction.guild);

    //     console.log(member)
    
    //     this.autoMod.ban(interaction, member, reason);
    // }


    constructor(private autoMod = Deps.get<AutoMod>(AutoMod)) {}
    
    execute = async(message: CommandContext, targetMention: string, ...reasonArgs: string[]) => {
        const target = getMemberFromMention(targetMention, message.guild);
        const moderator = message.author.tag;
        let reason = reasonArgs.join(' ');

        this.autoMod.ban(message, target, reason, moderator);

    }
}
