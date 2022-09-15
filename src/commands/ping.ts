import { Command, CommandContext, Permission } from '../interfaces/command';
import { Client, CommandInteraction, EmbedBuilder, SlashCommandBuilder  } from 'discord.js'

export default class PingCommand implements Command {
    name = 'ping';
    summary = 'Probably the best command ever created.';
    precondition: Permission = '';
    cooldown = 3;
    module = 'info';
    isSlashCommand = true;

    slashCommandData = new SlashCommandBuilder()
    .setName(this.name)
    .setDescription(this.summary);

    slashCommandExecute = async(interaction: CommandInteraction) => {
      await interaction.reply({ 
        embeds: [this.sendingEmbed(interaction.client.ws.ping, interaction.client)], 
        ephemeral: true 
      });
    }

    sendingEmbed = (ping: number, bot: Client) => {
      let p = ping < 100 ? ' <:ping1:1019341949293035540> - Good ' + ping : ping  > 200  ?'<:ping3:1019342047087431752> - Bad '+ ping : ping > 100 ? ' <:ping2:1019342429301768295> - Normal ' + ping : ping;
      let color= ping < 100 ? '3BA55C': ping > 200 ? 'ED4245': ping > 100 ? 'FAA61A' : ping;
      return new EmbedBuilder()
      .setAuthor({ name: bot.user.tag, iconURL: bot.user.avatarURL() })
      .setDescription(`**Ping is :\n${p} ms**`)
      .setColor(`#${color}`)
    }
    
    execute = (message: CommandContext) =>{
        message.message.reply({ 
          embeds: [this.sendingEmbed(message.bot.ws.ping, message.bot)],
          allowedMentions: {
            repliedUser: false
          }
        });
    }
}
 