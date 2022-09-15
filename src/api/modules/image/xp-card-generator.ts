import ImageGenerator from './image-generator';
import { Canvas, createCanvas, loadImage, CanvasRenderingContext2D } from 'canvas';
import { MemberDocument, SavedMember } from '../../../data/models/member';
import { UserDocument, XPCard } from '../../../data/models/user';
import Leveling from '../../../modules/xp/leveling';
import Deps from '../../../utils/deps';
import { bot } from '../../../bot';
import { Guild, User } from 'discord.js';
import Members from '../../../data/members';

export class XPCardGenerator extends ImageGenerator {
  defaultColors = {
    primary: '#ffffff',
    secondary: '#ababab',
    tertiary: '#cdcbcb'
  }

  private discordUser: User;
  private credit: number;

  constructor(
    private savedUser: UserDocument,
    private rank: number,
    private members = Deps.get<Members>(Members)
    ) {
    super();

    this.discordUser = bot.users.cache.get(savedUser.id);
  }

  async generate(savedMember: MemberDocument, preview?: XPCard) {
    if(savedMember.guildId == undefined || !savedMember.guildId) 
      this.credit = 0;
    else
      this.credit = savedMember.economy.balance || 0;

    if (preview)
      this.savedUser.xpCard = preview;

    const canvas = createCanvas(700, 700);
    const ctx = canvas.getContext('2d');

    await super.addBackgroundToCanvas(ctx, canvas,
      this.savedUser.xpCard.backgroundURL); //this.savedUser.xpCard.backgroundURL`
    await this.addXPInfo(ctx, canvas, savedMember.xp);
    this.addUserText(ctx, canvas, savedMember.xp);
    await this.addAvatarToCanvas(ctx,
      this.discordUser.displayAvatarURL({ size: 256, extension: 'png' }));
    
    const buffer = canvas.toBuffer();

    return buffer
  }

  private async addAvatarToCanvas(ctx: CanvasRenderingContext2D, imageURL: string) {
    ctx.beginPath();
    ctx.arc(130, 132, 82, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.clip();

    const avatar = await loadImage(imageURL);
    ctx.drawImage(avatar, 48, 50, 164, 164);
  }

  private async addUserText(ctx: CanvasRenderingContext2D, canvas: Canvas, xp: number) {
    let card = this.savedUser.xpCard;

    const {
      level
    } = Leveling.xpInfo(xp);

    ctx.fillStyle = card.tertiary || this.defaultColors.primary;
    ctx.font = '32px NatoSans Medium';
    ctx.fillText(`${this.savedUser.xpCard.title}`, canvas.width / 2.5, canvas.height / 2.5);

    ctx.fillStyle = card.tertiary || this.defaultColors.primary;
    ctx.font = '32px NatoSans Medium';
    ctx.fillText(`LEVEL`, 48, canvas.height / 2.4);

    ctx.fillStyle = card.primary || this.defaultColors.primary;
    ctx.font = '32px NatoSans Medium';
    ctx.fillText(`${level}`, 48, canvas.height / 2.15);

    ctx.fillStyle = card.tertiary || this.defaultColors.primary;
    ctx.font = '32px NatoSans Medium';
    ctx.fillText(`REPS`, 48, canvas.height / 1.75);

    ctx.fillStyle = card.primary || this.defaultColors.primary;
    ctx.font = '32px NatoSans Medium';
    ctx.fillText(`+${this.savedUser.xpCard.reps}`, 48, canvas.height / 1.6);

    ctx.fillStyle = card.tertiary || this.defaultColors.primary;
    ctx.font = '32px NatoSans Medium';
    ctx.fillText(`CREDITS`, 48, canvas.height / 1.4);

    ctx.fillStyle = card.primary || this.defaultColors.primary;
    ctx.font = '32px NatoSans Medium';
    ctx.fillText(`${this.credit}`, 48, canvas.height / 1.3);

    ctx.fillStyle = card.tertiary || this.defaultColors.primary;
    ctx.font = '32px NatoSans Medium';
    ctx.fillText(`RANK`, 48, canvas.height / 1.15);

    ctx.fillStyle = card.primary || this.defaultColors.primary;
    ctx.font = '32px NatoSans Medium';
    ctx.fillText(`${this.rank}`, 48, canvas.height - 50);

    ctx.fillStyle = card.primary || this.defaultColors.primary;
    // ctx.font = super.applyText(canvas, this.discordUser.username);
    const fontSize = this.discordUser.tag.length > 19 ? 32 : 40;
    const left = `${this.discordUser.tag}`.length > 15 ? canvas.width / 3 : canvas.width / 2.5;
    ctx.font = `${fontSize}px NatoSans Bold`;
    ctx.fillText(`${this.discordUser.tag}`, left, 132 + (fontSize / 2));
  }

  private async addXPInfo(ctx: CanvasRenderingContext2D, canvas: Canvas, xp: number) {
    let card = this.savedUser.xpCard;

    const sizeOffset = 325;
    const position = {
      x: 275,
      y: canvas.height * 0.775
    };
    const height = 25;

    const {
      nextLevelXP,
      level,
      levelCompletion
    } = Leveling.xpInfo(xp);

    ctx.fillStyle = card.secondary || this.defaultColors.secondary;
    ctx.fillRect(position.x, position.y, canvas.width - sizeOffset - 1, height);

    ctx.fillStyle = card.tertiary || this.defaultColors.tertiary;
    ctx.fillRect(position.x, position.y,
      (canvas.width - sizeOffset) * (levelCompletion), height);

    ctx.fillStyle = card.primary || this.defaultColors.primary;
    ctx.font = '24px Roboto, sans-serif';
    ctx.fillText(xp.toString(), canvas.width / 2.5, canvas.height / 1.175);

    ctx.fillStyle = card.primary || this.defaultColors.primary;
    ctx.fillText(`/`, canvas.width / 2.5 +
      ctx.measureText(xp.toString()).width, canvas.height / 1.175);

    ctx.fillStyle = card.primary || this.defaultColors.primary;
    ctx.fillText(`${nextLevelXP}XP`, canvas.width / 2.5 +
      ctx.measureText(`${xp}/`).width, canvas.height / 1.175);
  }
}