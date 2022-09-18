import { Command, CommandContext, Permission } from '../interfaces/command';
import Deps from '../utils/deps';
import { getMemberFromMention } from '../utils/command-utils';
import Guilds from '../data/guilds';
import { CommandInteraction, Message, User, AutocompleteInteraction } from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders';

export default class RankCommand implements Command {
    aliases = ['level', 'profile', 'xp'];
    name = 'rank';
    summary = 'Display the XP card of a user.';
    precondition: Permission = '';
    cooldown = 3;
    module = 'Leveling';
    isSlashCommand = true;

    slashCommandData = new SlashCommandBuilder()
        .setName(this.name)
        .setDescription(this.summary)
        .addUserOption(option => option.setName('user').setRequired(false).setDescription('The user to display the XP card of'));

    constructor(
        private guilds = Deps.get<Guilds>(Guilds)
    ) {};

    slashCommandExecute = async(interaction: CommandInteraction | AutocompleteInteraction) => {
        if (interaction.isAutocomplete()) return;

        const userMention = interaction.options.getUser('user');
        const SavedGuild = await this.guilds.get(interaction.guildId);
        let target = (userMention) ? userMention : interaction.user;

        if(!SavedGuild.leveling.enabled)
            throw new TypeError('Leveling is not enabled on this server.');

        if (target.bot) 
            throw new Error(`/&*footer/ Bot accounts do not have xp.`);
        
       this.main(interaction, target);
    }

    execute = async(message: CommandContext, userMention: string) =>  {
        const SavedGuild = await this.guilds.get(message.guildId);
        let target = (userMention) ? getMemberFromMention(userMention, message.guild).user : message.user;

        if(!SavedGuild.leveling.enabled)
            throw new TypeError('Leveling is not enabled on this server.');

        if (target.bot) 
            throw new Error(`/&*footer/ Bot accounts do not have xp.`);
        
        this.main(message.message, target);
    };

    private async main(interaction: CommandInteraction | Message, target: User) {
        
        const xpCardURL = `${process.env.API_URL}/guilds/${interaction.guildId}/members/${target.id}/xp-card`;  
        return interaction.reply({ files: [{ attachment: xpCardURL, name: 'xp-card.png' }]});
    }
}
