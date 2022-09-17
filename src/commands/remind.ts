import { Command, CommandContext, Permission } from '../interfaces/command';
import { EmbedBuilder } from 'discord.js'
import Guilds from '../data/guilds';
import Users from '../data/users';
import { bot } from '../bot';
import Deps from '../utils/deps';
import ms from 'ms'
import { generateUUID } from '../utils/command-utils';
import { UserDocument } from '../data/models/user';

export default class RemindCommand implements Command {
    name = 'remind';
    usage = "remind me [message] in [time]";
    summary = 'remind yourself to do something.';
    module = 'general';

    constructor(private guilds = Deps.get<Guilds>(Guilds),
                private users = Deps.get<Users>(Users)) {}
    
    execute = async(message: CommandContext, ...args: string[]) =>{
        const checkMark = '<a:pink_check:931318089281314896>'

        const embed = new EmbedBuilder();
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



        const remindIn = ms(timeRemind);
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

        embed.setDescription(`${checkMark} \u200B | \u200B Okay, I'll remind you about \`${content}\` in ${longTime}`);

        message.message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } }).then(() => {
            setTimeout(async() => {
                this.invokeReminder({ SavedUser, id, content });
            }, remindIn);
        });


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


    //private UsageEmbed(message: CommandContext, prefix: string) {
    //    const embed = new EmbedBuilder()
    //    .setAuthor({ name: `Usage`, iconURL: message.bot.user.avatarURL() })
    //    .setDescription(`Please format your reminders like this : \n\n >>> \`${prefix}remind me [message] in [time]\` \n \`${prefix}remind me that i am cute in 2 hours\``)
    //    .setColor('#fbe6ed');
    //    return message.channel.send({ embeds: [embed] });
    //}
}

export interface Reminder {
    SavedUser: UserDocument;
    id: string;
    content: string;
}
 