import { Router } from 'express';
import Music from '../../modules/music/music';
import Deps from '../../utils/deps';
import { SessionManager } from '../modules/performance/session-manager';
import { validateGuildManager } from '../modules/middleware';
import { bot } from '../../bot';
import { APIError, sendError } from '../modules/api-utils';

export const router = Router({ mergeParams: true });

const sessions = Deps.get<SessionManager>(SessionManager);
const music = Deps.get<Music>(Music);

router.get('/pause', async (req, res) => {
  try {
    // const { player } = await getMusic(req.params.id, req.query.key);
    // player.voices.get(req.params.id).pause();

    res.status(200).send({ success: true });
  } catch (error) { sendError(res, new APIError(400)); }
});

router.get('/resume', async (req, res) => {
  try {
    // const { player } = await getMusic(req.params.id, req.query.key);
    // player.voices.get(req.params.id).unpause();

    res.status(200).send({ success: true });
  } catch (error) { sendError(res, new APIError(400)); }
});

router.get('/list', async (req, res) => {
  try {
    // const { player } = await getMusic(req.params.id, req.query.key);
    // for (const track of player.songs)
    //   track['durationString'] = `${track.duration}`;

    res.status(200).json();
  } catch (error) { 
    console.log(error)
    sendError(res, new APIError(400));
   }
});

router.get('/skip', async (req, res) => {
  try {
    // const { player } = await getMusic(req.params.id, req.query.key);
    // await player.skip();

    res.status(200).send({ success: true });
  } catch (error) { sendError(res, new APIError(400)); }
});

router.get('/seek/:position', async (req, res) => {
  try {
    // const { player } = await getMusic(req.params.id, req.query.key);
    // player.seek(+req.params.position);

    res.status(200).send({ success: true });
  } catch (error) { sendError(res, new APIError(400)); }
});

router.get('/remove/:number', async (req, res) => {
  try {
    // const { player } = await getMusic(req.params.id, req.query.key);
    // const track = player.songs.splice(+req.params.number - 1);

    res.status(200) // .json(track);
  } catch (error) { sendError(res, new APIError(400)); }
});

router.get('/play', async (req, res) => {
  try {
    const { authUser } = await sessions.get((req.query.key as any));

    const guild = bot.guilds.cache.get((req.params as any).id);
    const member = guild.members.cache.get(authUser.id);

    console.log(req.query.query?.toString())

    if(!req.query.query)
        throw new TypeError("No Query")

    // music.client.play(member.voice.channel, req.query.query.toString());

    console.log(music)


    res.status(200)
  } catch (error) { 
    console.log(error)
    sendError(res, new APIError(400));
   }
});

router.get('/set-volume/:value', async (req, res) => {
  try {
    // player.setVolume(+req.params.value / 100);
    // const { player } = await getMusic(req.params?.id, req.query.key);

    res.status(200).send({ success: true });
  } catch (error) { sendError(res, new APIError(400)); }
});

router.get('/shuffle', async (req, res) => {
  try {
    // const { player } = await getMusic(req.params.id, req.query.key);
    // player.shuffle();

    res.status(200).send({ success: true });
  } catch (error) { sendError(res, new APIError(400)); }
});

router.get('/stop', validateGuildManager, async (req, res) => {
  try {
    // const { player } = await getMusic(req.params.id, req.query.key);
    // await player.stop();

    res.status(200).send({ success: true });
  } catch (error) { 
    console.log(error)
    sendError(res, new APIError(400));
   }
});