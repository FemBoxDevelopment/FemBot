import { Command, CommandContext, Permission } from '../../interfaces/command';
import { AutocompleteInteraction, CacheType, CommandInteraction, EmbedBuilder, Message, SlashCommandBuilder } from 'discord.js'
import Guilds from '../../data/guilds';
import Users from '../../data/users';
import { bot } from '../../bot';
import Deps from '../../utils/Deps';
import ms from 'ms'
import { generateUUID } from '../../utils/command-utils';
import { UserDocument } from '../../data/models/user';

export default class RemindCommand implements Command {
    name = 'remind';
    usage = "remind me [message] in [time]";
    summary = 'remind yourself to do something.';
    module = 'general';
    isSlashCommand = true;

    slashCommandData = new SlashCommandBuilder()
        .setName(this.name)
        .setDescription(this.summary)
        .addStringOption(opt => opt.setName('message').setDescription('Message to remind you.').setRequired(true))
        .addStringOption(opt =>  opt.setName('time').setDescription('when to remind you. {m/h/d}').setRequired(true))

    constructor(private guilds = Deps.get<Guilds>(Guilds),
                private users = Deps.get<Users>(Users)) {}

    slashCommandExecute = async(interaction: CommandInteraction | AutocompleteInteraction) => {
        if(interaction.isAutocomplete())
            return;

        const SavedUser = await this.users.get(interaction.user);

        const timeRemind = interaction.options.get('time', true).value.toString();
        const content = interaction.options.get('message', true).value.toString();

        this.main(interaction, SavedUser, content, timeRemind);
    };
    
    execute = async(message: CommandContext, ...args: string[]) =>{
        const SavedGuild = await this.guilds.get(message.guildId);
        const SavedUser = await this.users.get(message.author);
        const { prefix } = SavedGuild.general;



        if(!args[0] || args[0].toLowerCase() != 'me' || !args[1])
            throw new TypeError(`Please format your reminders like this : \n\n >>> \`${prefix}remind me [message] in [time]\` /&*footer/ incorrect format`);

        //find the last word 'in' in args
        const time = args.slice(1).join(' ').split(' ').reverse().find(word => word.toLowerCase() == 'in');

        if(!time)
            throw new TypeError(`Please format your reminders like this : \n\n >>> \`${prefix}remind me [message] in [time]\` /&*footer/ incorrect format`);

        //get words after 'in' in args
        const timeRemind = args.slice(args.indexOf(time) + 1).join(' ');
        // this returns [time] eg: 5 minutes
        //remove time from remind
        const content = args.slice(1).join(' ').replace(`in ${timeRemind}`, '').trim();

        this.main(message.message, SavedUser, content, timeRemind)
    }

    private async main(interaction: Message | CommandInteraction, SavedUser: UserDocument, content: string, timeRemind: string) {
        const suffix = /[a-zA-z]/.test(timeRemind)

        const remindIn = ms(timeRemind) * (suffix ? 1 : 1000);
        const longTime = ms(remindIn, { long: true });

        //get the time it'll be when the user will be reminded
        const expires = new Date(Date.now() + remindIn);

        const id = generateUUID();

        SavedUser.reminders.push({
            id,
            content,
            expires,
            expiresMilliseconds: expires.getTime(),
        })

        await SavedUser.updateOne(SavedUser);

        const embed = new EmbedBuilder()
        .setDescription(`✅ \u200B | \u200B Okay, I'll remind you about \`${content}\` in ${longTime}`);

        interaction.reply({ embeds: [embed], allowedMentions: { repliedUser: false } });
        
        setTimeout(async() => {
            this.invokeReminder({ SavedUser, id, content });
        }, remindIn);
    }

    public async invokeReminder({SavedUser, id, content}: Reminder) {

        //get discord user from id
        let user: any = bot.users.cache.find(u => u.id == SavedUser.id);

        const index = SavedUser.reminders.findIndex(reminder => reminder.id == id);
        SavedUser.reminders.splice(index, 1);
        await SavedUser.updateOne(SavedUser);

        const embed = new EmbedBuilder()
        .setColor('#a80201')
        .setTitle(`You asked me to remind you! reminderID [${id}]`)
        .setAuthor({ name: user.tag, iconURL: user.avatarURL()})
        .setDescription(`${content}`)

        user.send({ embeds: [embed] });
    }
}

export interface Reminder {
    SavedUser: UserDocument;
    id: string;
    content: string;
}
 