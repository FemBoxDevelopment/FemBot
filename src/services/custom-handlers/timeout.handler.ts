import { Collection, Guild, GuildManager, GuildMember } from "discord.js";
import Members from "../../data/members";
import Users from "../../data/users";
import Deps from "../../utils/deps";
import RemindCommand from "../../commands/remind";


export default class TimeoutHandler {
  on = 'timeout';
  public readonly members: GuildMember[] = []; 

  constructor(
    private users = Deps.get<Users>(Users),
    private remind = Deps.get<RemindCommand>(RemindCommand),
  ) {}


  async init(guilds: Guild[]) {


      for(const guild of guilds){
        const members = guild.members.cache.filter(member => !member.user.bot).map(member => member);

        this.members.push(...members);
      }

      for(const member of this.members) {
            // get the member
            if(!member) return

            const SavedUser = await this.users.get(member);

            for( const reminder of SavedUser.reminders ) {
                const timeLeft = reminder.expires.getTime() - Date.now();
                setTimeout(async() => {
                    await this.remind.invokeReminder({ SavedUser, ...reminder });
                }, timeLeft);
            }
      }
  }
}
