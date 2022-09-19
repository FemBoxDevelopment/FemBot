import { Command, CommandContext } from '../../interfaces/command';
import HangmanGame from "../../modules/games/hangman";


export default class HangmanCommand implements Command {
  cooldown = 30;
  module = 'Fun';
  name = 'hangman';
  summary = 'guess the word by suggesting letters with a limit on guesses and time';
  usage = 'hangman'


  
  execute = async(message: CommandContext, ...args: string[]) => {
    if(!message.guild.members.me.permissions.has([ 'ManageMessages' ])) {
      throw new TypeError('Bot missing permissions /&*footer/ Missing Permission: MANAGE_MESSAGES')
    }

    const hangman = new HangmanGame();
    hangman.newGame(message.message, false); //args[0].toLowerCase() == 'all' ? true : false

  }
}
