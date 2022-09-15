import { Router } from 'express';
import { SavedMember } from '../../data/models/member';
import { XPCardGenerator } from '../modules/image/xp-card-generator';
import { bot } from '../../bot';
import Deps from '../../utils/deps';
import Ranks from '../modules/ranks';
import Users from '../../data/users';
import Guilds from '../../data/guilds';
import Logs from '../../data/logs';
import AuditLogger from '../modules/audit-logger';
import { Permissions, TextChannel } from 'discord.js';
import Leveling from '../../modules/xp/leveling';
import Emit from '../../services/emit';
import { APIError, leaderboardMember, sendError } from '../modules/api-utils';
import { SessionManager } from '../modules/performance/session-manager';
import { validateGuildManager } from '../modules/middleware';
import ReactionRoles from '../../modules/general/reaction-roles';
import { WebhookLogger } from '../modules/logging/webhook-logger';
import Members from '../../data/members';

export const router = Router();

const emit = Deps.get<Emit>(Emit);
const guilds = Deps.get<Guilds>(Guilds);
const logs = Deps.get<Logs>(Logs);
const sessions = Deps.get<SessionManager>(SessionManager);
const users = Deps.get<Users>(Users);
const members = Deps.get<Members>(Members);
const webhookLogger = Deps.get<WebhookLogger>(WebhookLogger);
const reactionRoles = Deps.get<ReactionRoles>(ReactionRoles);

router.get('/', async (req, res) => {
  try {
    const key = req.query.key.toString();
    await sessions.update(key);

    const { guilds } = await sessions.get(key);
    res.json(guilds);
  } catch (error) { } //sendError(res, new APIError(200)); 
});

router.put('/:id/:module', validateGuildManager, async (req, res) => {
  try {
    const { id, module } = req.params;

    const { authUser } = await sessions.get(req.query.key.toString());
    const guild = bot.guilds.cache.get(id); 
    const savedGuild = await guilds.get(id);
    
    const change = AuditLogger.getChanges({
      old: savedGuild[module],
      new: req.body
    }, module, authUser.id);

    savedGuild[module] = req.body;
    await savedGuild.save();
     
    const log = await logs.get(guild);
    log.changes.push(change);
    await log.save();
    
    emit.configSaved(guild, authUser, change);

    if(module == "reactionRoles") {
      await reactionRoles.addReactionsToMessage(req.body.configs);
    }
      
    res.json(savedGuild);
  } catch (error) { sendError(res, new APIError(400)); }
});

router.get('/:id/config', async (req, res) => {
  try {
    const guild = bot.guilds.cache.get(req.params.id);
    const savedGuild = await guilds.get(req.params.id);
    res.json(savedGuild);
  } catch (error) { sendError(res, new APIError(400)); }
});

router.get('/:id/channels', async (req, res) => {
  try {
    const guild = bot.guilds.cache.get(req.params.id);
    res.send(guild.channels.cache);    
  } catch (error) { sendError(res, new APIError(400)); }
});

router.get('/:id/log', async(req, res) => {
  try {
    const guild = bot.guilds.cache.get(req.params.id);
    const log = await logs.get(guild);
    res.send(log);
  } catch (error) { sendError(res, new APIError(400)); }
});

router.get('/:id/commands', async (req, res) => {
  try {
    const savedGuild = await guilds.get(req.params.id);
    res.json({
      guild: bot.guilds.cache.get(req.params.id),
      commands: savedGuild.commands.custom
    });
  } catch (error) { sendError(res, new APIError(400)); }
});

router.get('/:id/public', (req, res) => {
  const guild = bot.guilds.cache.get(req.params.id);
  res.json(guild);
});

router.get('/:id/roles', async (req, res) => {
  try {
    const guild = bot.guilds.cache.get(req.params.id);
    const roles = (await guild.roles.fetch()).toJSON()
    res.send(toJson(roles));
  } catch (error) { sendError(res, new APIError(400)); console.log((error as Error).message) }
});

router.get('/:id/members', async (req, res) => {
  try {
    const savedMembers = await SavedMember.find({ guildId: req.params.id }).lean();    
    let rankedMembers = [];
    for (const member of savedMembers) {
      const user = bot.users.cache.get(member.userId);
      if (!user) continue;
      
      const xpInfo = Leveling.xpInfo(member.xp);
      rankedMembers.push(leaderboardMember(user, xpInfo));
    }
    rankedMembers.sort((a, b) => b.xp - a.xp);
  
    res.json(rankedMembers);
  } catch (error) { sendError(res, new APIError(400)); }
});

router.get('/:guildId/members/:memberId/balance', async( req, res ) => {
  try {
    const { guildId, memberId } = req.params;
    
    const guild = bot.guilds.cache.get(guildId);
    const member = guild.members.cache.get(memberId);

    const balance = await members.getBalance(member);
    res.json(balance);

  } catch (error) { console.log((error as Error).message) }; //sendError(res, new APIError(400)); 
});

router.get('/:guildId/members/:memberId/saved', async( req, res ) => {
  try {
    const { guildId, memberId } = req.params; 

    const guild = bot.guilds.cache.get(guildId);
    const member = guild?.members.cache.get(memberId);  

    const savedUser = await users.get(member);
    const savedMembers = await SavedMember.find({ guildId });
    const savedMember = savedMembers.find(m => m.userId === savedUser.id)

    res.json(savedMember)

  } catch (error) { console.log((error as Error).message) } //sendError(res, new APIError(400)); 
})

router.get('/:guildId/members/:memberId/xp-card', async (req, res) => {
  try {
    const { guildId, memberId } = req.params;    

    const guild = bot.guilds.cache.get(guildId);
    const member = guild?.members.cache.get(memberId);    
    if (!member)
      throw TypeError('Could not find member in cache.');
    
    const savedUser = await users.get(member);
    const savedMembers = await SavedMember.find({ guildId });
    const savedMember = savedMembers.find(m => m.userId === savedUser.id)
    const rank = Ranks.get(member, savedMembers);
    
    const generator = new XPCardGenerator(savedUser, rank);
    const image = await generator.generate(savedMember);
    
    res.set({'Content-Type': 'image/png'}).send(image);
  } catch (error) { sendError(res, new APIError(400)  ); console.log((error as Error).message) }
});

router.get('/:guildId/members/:memberId/member-status', async (req, res) => {
  try {
    const { guildId, memberId } = req.params;
    const guild = bot.guilds.cache.get(guildId);
    const member = guild?.members.cache.get(memberId);

    let hasPerms = member.permissions.has([ 'ManageGuild', 'ManageRoles', 'ManageChannels', 'KickMembers', 'BanMembers', 'Administrator' ]);

    res.json({ hasPerms: hasPerms });


  } catch (error) { sendError(res, new APIError(400)); console.log((error as Error).message) }
})

router.get('/:id/bot-status', async (req, res) => {
  try {
    const id = req.params.id;
    const botMember = bot.guilds.cache
      .get(id)?.members.cache
      .get(bot.user.id);
    
    res.json({ hasAdmin: botMember.permissions.has(['Administrator']) });
  } catch (error) { sendError(res, new APIError(400)); }
});

router.get('/:id/channels/:channelId/messages/:messageId', async(req, res) => {
  try {
    const guild = bot.guilds.cache.get(req.params.id) as any;
    const channel = guild?.channels.cache
      .get(req.params.channelId) as any;   

    const msg = await channel.messages.fetch(req.params.messageId);

    res.json({
      ...msg,
      member: guild.members.cache.get(msg.author.id),
      user: bot.users.cache.get(msg.author.id)
    });
  } catch (error) { sendError(res, new APIError(400)); }
});

router.post('/:id/channels/:channelId/embed', async(req, res) => {
  try {
    const { id, channelId } = req.params;
    const embedSent = await webhookLogger.embedSent(req.body.embedData, channelId);

    console.log(req.body.embedData);

    res.json({ message: embedSent });
  } catch (error) {
    sendError(res, new APIError(400)); }
});

router.get('/:id/warnings', async(req, res) => {
  try {
    const members = await SavedMember.find({ guildId: req.params.id });    

    let warnings = [];
    for (const member of members)
      for (const warning of member.warnings) {
        const number = member.warnings.indexOf(warning) + 1;
        warnings.push({ ...warning, userId: member.userId, number });
      }
    res.json(warnings);    
  } catch (error) { sendError(res, new APIError(400)); }
});



function toJson(data) {
  return JSON.stringify(data, (_, v) => typeof v === 'bigint' ? `${v}n` : v)
      .replace(/"(-?\d+)n"/g, (_, a) => a);
}