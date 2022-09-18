import { Command, CommandContext, Permission } from "../../interfaces/command";
import Deps from "../../utils/deps";
import Music, { ConnectionStatus } from "../../modules/music/music";
import { EmbedBuilder } from "discord.js";
import Guilds from "../../data/guilds";
import { Song } from "distube";

export default class QueueCommand implements Command {
  aliases = ["q", "list"];
  name = "queue";
  summary = "Display the current track list.";
  precondition: Permission = "Speak";
  cooldown = 3;
  module = "Music";

  constructor(private music = Deps.get<Music>(Music)) {}

  execute = async (message: CommandContext) => {
    const player = this.music.getQueue(message.guild);

    if (
      this.music.getConnectionStatus(message.guild) ==
      ConnectionStatus.Disconnected
    )
      throw new TypeError("/&*footer/ No songs currently playing");

    let details = "";
    for (let i = 0; i < player.songs.length; i++) {
      const track: Song = player.songs[i];
      if (i > 10) break;

      const prefix =
        i == 0
          ? `**Playing:**`
          : i == 1
          ? `\n **Next songs:** \n **[${i}]**`
          : `**[${i}]**`;
      details += `${prefix} [${track.name}](${track.url}) \n Duration \`${this.music.getDuration(player)}\` - Requested By <@${track.user.id}> \n`;
    }

    const embed = new EmbedBuilder()
      .setAuthor({ name: "Music Queue" })
      .setDescription(details)
      .setColor("Blue")
      .setFooter({
        text: `Page 1/1 • ${player.songs.length} songs • duration: ${player.formattedDuration}`,
      });
    message.message.reply({ embeds: [embed] });
  };
}
