import { GuildMember, Guild } from 'discord.js';

export function getMemberFromMention(mention: string, guild: Guild): GuildMember {
  if(!mention)
    throw new Error('/&*footer/ No user provided');

  const id = getIdFromMention(mention);
  const member = guild.members.cache.get(id);
  
  if (!member)
    throw new TypeError('Member not found.');
  
  return member;
}

function getIdFromMention(mention: string) {
  return mention?.match(/\d+/g)[0];
}

export function getRoleFromMention(mention: string, guild: Guild) {
  const id = getIdFromMention(mention);
  const role = guild.roles.cache.get(id);
  if (!role)
    throw new TypeError('Role not found.');
  
  return role;
}

export function generateUUID() {
  let time = new Date().getTime();
  let uuid = 'xxxxxxxx'.replace(/[xy]/g, (c) => { //-xxxx-4xxx-yxxx-xxxxxxxxxxxx
    let random = (time + Math.random() * 16) % 16 | 0;
    time = Math.floor(time / 16);
    return ((c == 'x') ? random :(random&0x3|0x8)).toString(16);
  });
  return uuid;
}

export function toNeatList(arr: any[]) {
  if (arr.length === 1)
    return arr[0];
  else if (arr.length === 2)
    return `${arr[0]}, and ${arr[1]}`;
  return arr
      .slice(arr.length - 1)
      .join(', ')
      .concat(`and ${arr[arr.length - 1]}`);
}