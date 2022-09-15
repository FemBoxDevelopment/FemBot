import { ReactionRole } from './../../data/models/guild';
import { GuildDocument, SavedGuild } from '../../data/models/guild';
import { MessageReaction, User } from 'discord.js';
import { bot } from '../../bot';
import Log from '../../utils/log';

export default class ReactionRoles {
  async init() {
    let channelCount = 0;
    const savedGuilds = await SavedGuild.find({ _id: '929408380488011806' });


    for (const savedGuild of savedGuilds) {
      for (const config of savedGuild.reactionRoles.configs) {
        channelCount++;

        const channel = bot.channels.cache.get(config.channel) as any;
        if (!channel) return;

        const message = await channel.messages.fetch(config.messageId);
        if (!message) return;

        channel.messages.cache.set(
          config.messageId,
          await channel.messages.fetch(config.messageId)
        );
      }
    }

    Log.info(`Cached ${channelCount} text channels.`, 'rr');
  }

  async addReactionsToMessage(config: ReactionRole[]) {
    try{

      for (const role of config) {

        const channel = bot.channels.cache.get(role.channel) as any;
        if (!channel) return;
  
        const message = await channel.messages.fetch(role.messageId);
        if (!message) return;
  
        await message.react(role.emote);
  
      }

    } catch(e) { 
      console.log(e);
    }
  }

  
  async checkToAdd(user: User, reaction: MessageReaction, savedGuild: GuildDocument) {  
    const config = this.getReactionRole(reaction, savedGuild);
    if (!config) return;
    const { guild } = reaction.message;
    const member = await guild.members.fetch(user.id);
    if (!member || member.user.bot) return;

    const role = guild.roles.cache.get(config.role);

    console.log(config.role)
    console.log(role.id)

    if (role)
      await member.roles.add(role);
  }

  async checkToRemove(user: User, reaction: MessageReaction, savedGuild: GuildDocument) {
    const config = this.getReactionRole(reaction, savedGuild);
    if (!config) return;

    const { guild } = reaction.message;
    const member = await guild.members.fetch(user.id);
    const role = guild.roles.cache.get(config.role);
    if (role)
      await member.roles.remove(role);
  }

  private getReactionRole({ message, emoji }: MessageReaction, savedGuild: GuildDocument) {
    const toHex = (a: string) => a.codePointAt(0)//.toString(32);

    return (savedGuild.reactionRoles.enabled)
      ? savedGuild.reactionRoles?.configs
        .find(r =>{ 

            if(r.channel == (message.channel as any).id) {
              if(r.messageId == message.id) {
                console.log('messageId OK')

                if(r.emote.includes('<') ? r.emote.includes(emoji.name) : toHex(r.emote) == toHex(emoji.name)) {
                  console.log('roleCheck OK')
                  return true;
                }
              }
            };

            return false;
          })
      : null;
  }
}