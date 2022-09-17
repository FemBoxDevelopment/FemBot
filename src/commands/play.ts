import { GuildTextBasedChannel } from 'discord.js';
import { Command, CommandContext, Permission } from '../interfaces/command';
import Deps from '../utils/deps';
import Music from '../modules/music/music';
import User from '../data/users'
import { EmbedBuilder } from 'discord.js';

export default class PlayCommand implements Command {
  aliases = ['p'];
  cooldown = 2;
  module = 'Music';
  name = 'play';
  precondition: Permission = 'Speak';
  summary = 'Join and play a YouTube result.';
  usage = 'play query'

  constructor(
    private music = Deps.get<Music>(Music),
    private user = Deps.get<User>(User)
  ) {}
  
  execute = async(message: CommandContext, ...args: string[]) => {
    const embed = new EmbedBuilder();

    if(!message.member.voice.channel)
        throw new TypeError('You must be in a `VoiceChannel` to play music. /&*footer/ not in VoiceChannel.')

    const query = args?.join(' ');
    if(!query)
        throw new TypeError('Please provide a query. /&*footer/ missing song query')
    
    const queue = this.music.getQueue(message.guild);

    //if(queue.songs.length > 15)
    //    throw new TypeError('Max queue size has been exeeded, please wait until queue clears to add more songs. /&*footer/ Queue size exeeded.');
    //let pos = `${queue.songs.length}`
    //if(queue.songs.length == 0)
    //    pos = 'Up next';

    const song = await this.music.getSong(query);
    
    await this.music.client.play(message.member.voice.channel, song.url, {
        message: message.message,
        textChannel: message.channel as GuildTextBasedChannel,
        member: message.member
    })

    if(queue.playing) {
      embed.setColor('Blue')
      .setDescription(`Enqueded \`${song.name}, current position in queue: ${1}`)

      message.message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } });
    }
  }
}
