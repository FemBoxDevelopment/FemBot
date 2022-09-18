import { Command, CommandContext, Permission } from '../interfaces/command';
import Deps from '../utils/deps'
import Guild from '../data/guilds'
import Discord, { CommandInteraction, User, AutocompleteInteraction, EmbedBuilder} from 'discord.js'
import { GuildDocument } from "../data/models/guild";
import Members from '../data/members';


export default class CoinFlipCommand implements Command {
  name = 'coinflip';
  summary = 'Flip a coin and see if you double your credits!';
  precondition: Permission = '';
  cooldown = 3;
  module = 'economy';
  aliases = ['cf'];
  usage = 'coinflip {heads, tails} {bet}';

  constructor(
      private guilds = Deps.get<Guild>(Guild),
      private members = Deps.get<Members>(Members),
     ) {}
  
  execute = async(message: CommandContext, ...args: string[]) => {
    const emoji = '<a:milk:931318946576105562>'

    const embed = new EmbedBuilder()
    const coinflip = Math.floor(Math.random() * 8) + 16;
    let side: string;

    const SavedGuild = await this.guilds.get(message.message.guildId)

    let bet = parseInt(args[1])
    let coinSide = args[0]

    //check if coinflip value is an even number
    if(coinflip % 2 === 0) {
        side = 'heads';
    } else side = 'tails';

    let usrBalance = await this.members.getBalance(message.member);

    if(bet > usrBalance) {
        embed.setColor('#dd2e45')
        .setDescription(`Whoops! You don't have enough ${emoji} | \`${bet}\`! \nYou need ${emoji} | \`${bet - usrBalance}\` more`)
        return message.message.reply({ embeds: [embed] })
    }

    if(!coinSide) {
        embed.setAuthor({name: `A coin was flipped and it was it was ${side}!`})
        embed.setColor("#dd2e45")
        return message.message.reply({ embeds: [embed] });
    } else if (!bet || !coinSide.charAt(0).toLowerCase().includes('t', 0) && !coinSide.charAt(0).toLowerCase().includes('h', 0) || bet < 1 ) {
        throw new TypeError("You need to bet for heads or tails as well as the amount you'd like to bet.")
    } else {
        if(coinSide.charAt(0).toLowerCase() == side.charAt(0).toLowerCase()) {
            await this.members.addBalance(message.member, bet)
            embed.setAuthor({name: `You were right, it was ${side}!`})
            .setColor("#dd2e45")
            .setDescription(`You have earned ${emoji} | \`${bet}\`!`)
            return message.message.reply({ embeds: [embed] });
        } else {
            embed.setAuthor({name: `Whoops, it was ${side}!`})
            .setColor("#dd2e45")
            .setDescription(`Better luck next time, you have lost ${emoji} | \`${bet}\`!`)

            return message.message.reply({ embeds: [embed] }).then(async () => await this.members.addBalance(message.member, bet * -1));
        }
    }
  }
}
