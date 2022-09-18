import { EmbedBuilder, EmbedData, Webhook, Guild } from 'discord.js';
import { bot } from '../../../bot';

export class WebhookLogger {

  public async get(channelId: string, name: string) {
    const channel = bot.channels.cache.get(channelId) as any;
    if (!channel) return;

    const webhooks = await channel.fetchWebhooks();
    return webhooks.find((w: Webhook) => w.name === name)
      ?? await channel.createWebhook({
        name: name,
        avatar: bot.user.displayAvatarURL(),
        reason: `Created for ${(channel.guild as Guild).members.me.user.tag}'s webhook logger.`
      });
  }

  public async feedback(message: string) {
    const webhook = await this.get(process.env.FEEDBACK_CHANNEL_ID, 'Neko - Feedback');
    if (!webhook) return;
  
    await webhook.send({embeds: [
      new EmbedBuilder({
        title: 'Feedback',
        description: message
      })
    ]});
  }

  public async embedSent(embedData: embedData, channelId: string): Promise<String> {
    const embed = new EmbedBuilder()
    .setTitle(embedData.title)
    .setDescription(embedData.description)
    .setColor(embedData.color ?? '#0099ff')
    .setAuthor({ name: embedData.author.name, url: embedData.author.url, iconURL: embedData.author.iconURL })
    .setImage(embedData.image.url)
    .setFooter({ text: embedData.footer.text, iconURL: embedData.footer.iconURL })
    .setURL(embedData.url)
    .setThumbnail(embedData.thumbnail.url)
    
    //get channel in guild
    const channel = bot.channels.cache.get(channelId) as any;
    if (!channel) 
      throw new TypeError('No channel found.');

    try {

      if(embedData.title || embedData.description) {
        channel.send({ embeds: [embed], content: embedData?.message })
      } else { 
        channel.send({ content: embedData.message })
      }

    } catch (err) {
      return `We've encountered an error while sending your embed. Please try again later. \nError: ${(err as Error).message}`
    }

    return `We've successfully sent your message.`;
  }

  public async vote(userId: string, votes: number) {
    const webhook = await this.get(process.env.VOTE_CHANNEL_ID, 'Neko - Vote');
    if (!webhook) return;

    await webhook.send({ embeds: [ new EmbedBuilder({
      title: 'Vote',
      description: `✅ <@!${userId}> has entered, and now has \`${votes}\` entries!`
    }) ]});
  }
}

interface embedData extends EmbedData {
  message: string,
}