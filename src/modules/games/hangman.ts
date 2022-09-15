import fs from 'fs';
import Discord, { Message, EmbedBuilder, MessageReaction, User, GuildMember } from "discord.js";
import member from '../../data/members'
import Deps from "../../utils/Deps";
import { letterEmojisMap, possibleWords } from './WordStructure.json'

export default class HangmanGame {
  
  currency = "Starberry Milk"
  gameEmbed: Message = null;
  inGame = false;
  word = "";
  guesssed = [];
  wrongs = 0;
  user: GuildMember;
  guildid: string;
  mutiuser = false;

  newGame(message: Message, allowOthers: boolean) {
    if (this.inGame == true) {
      let embed = new EmbedBuilder()
      .setColor('Red')
      .setDescription('You\'re already in a game!')
      return message.reply({embeds: [embed]})
    }

    this.mutiuser = allowOthers;
    this.user = message.member 
    this.guildid = message.guildId 
    this.inGame = true;
    this.word = possibleWords[
      Math.floor(Math.random() * possibleWords.length)
    ].toUpperCase();
    this.guesssed = [];
    this.wrongs = 0;

    const embed = new EmbedBuilder()
      .setColor("Blue")
      .setTitle("Hangman")
      .setDescription(this.getDescription())
      .addFields([
        { name: 'Letters Guessed', value: '\u200b' },
        { name: 'How To Play', value: "React to this message using the emojis that look like letters (🅰️, 🇹, )" }
      ])
      .setTimestamp();

    message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } }).then((emessage) => {
      this.gameEmbed = emessage;
      this.waitForReaction();
    });
  }

  private makeGuess(reaction: string) {
    if (Object.keys(letterEmojisMap).includes(reaction)) {
      const letter = letterEmojisMap[reaction];
      if (!this.guesssed.includes(letter)) {
        this.guesssed.push(letter);

        if (this.word.indexOf(letter) == -1) {
          this.wrongs++;

          if (this.wrongs == 6) {
            this.gameOver(false);
          }
        } else if (
          !this.word
            .split("")
            .map((l) => (this.guesssed.includes(l) ? l : "_"))
            .includes("_")
        ) {
          this.gameOver(true);
        }
      }
    }

    if (this.inGame) {
      const editEmbed = new EmbedBuilder()
        .setColor("Blue")
        .setTitle("Hangman")
        .setDescription(this.getDescription())
        .addFields([
            { name: 'Letters Guessed', value: this.guesssed.length == 0 ? "\u200b" : this.guesssed.join(" ") },
            { name: "How To Play", value: "React to this message using the emojis that look like letters (🅰️, 🇹, )" }
        ])
        .setTimestamp();
      this.gameEmbed.edit({embeds: [editEmbed]});
      this.waitForReaction();
    }
  }

  private async gameOver(win: boolean) {
    this.inGame = false;

    let credits = Math.floor(Math.random() * (this.word).length * 10) + 5
    const editEmbed = new Discord.EmbedBuilder()
      .setColor(win ? 'Green' : 'Red')
      .setTitle("Hangman")
      .setDescription(
        (win ?"You Win!" : "You lose!") + `\n\nThe Word was:\n \`${this.word}\``
      )
      .setTimestamp();

    if(win) {
        const members = Deps.get<member>(member)
        await members.addBalance(this.user, credits)
        editEmbed.addFields([
            { name: `${this.currency} Won`, value: `\`${credits}\``}
        ])
    }
    this.gameEmbed.edit({embeds: [editEmbed]});
    this.gameEmbed.reactions.removeAll();
  }

  private getDescription() {
    return (
      "```" +
      "|‾‾‾‾‾‾|   \n|     " +
      (this.wrongs > 0 ? "🎩" : " ") +
      "   \n|     " +
      (this.wrongs > 1 ? "😟" : " ") +
      "   \n|     " +
      (this.wrongs > 2 ? "👕" : " ") +
      "   \n|     " +
      (this.wrongs > 3 ? "🩳" : " ") +
      "   \n|    " +
      (this.wrongs > 4 ? "👞👞" : " ") +
      "   \n|     \n|__________\n\n" +
      this.word
        .split("")
        .map((l) => (this.guesssed.includes(l) ? l : "_"))
        .join(" ") +
      "```"
    );
  }

  private waitForReaction() {
    this.gameEmbed
      .awaitReactions({ max: 1, time: 300000, errors: ["time"], filter: (reaction, user) => this.mutiuser ? true : user.id == this.user.id })
      .then((collected) => {
        const reaction: MessageReaction = collected.first();
        this.makeGuess(reaction.emoji.name);
        reaction.remove();
      })
      .catch((collected) => {
        this.gameOver(false);
      });
  };
};
