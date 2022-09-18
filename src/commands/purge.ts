import { Command, CommandContext, Permission } from '../interfaces/command';
import Discord, { EmbedBuilder, TextChannel } from 'discord.js'

export default class PurgeCommand implements Command {
    name = 'purge';
    aliases = ['clear', 'prune', 'delete', 'remove'];
    summary = 'Clear up messages up to 2 weeks old.';
    precondition: Permission = 'ManageMessages';
    module = 'Auto-mod';
  
    async execute(message: CommandContext, ...args: string[]) {
        let embed = new EmbedBuilder()

        if(!(message.channel as any).isTextBased())
            throw new TypeError(`This command can\'t be ran in this channel.`)

        if(isNaN(+args[0])) return message.message.react('❌');

        const msgs = await (message.channel as any).bulkDelete(+args[0]);
        embed.setColor('Red')
        .setDescription(`Purged \`${msgs.size}\` messages in <#${(message.channel as any).id}>`)

        const msg = await (message.message.channel as any).send({ embeds: [embed] })
        
        setTimeout(() => msg.delete(), 5000)
    }
}
