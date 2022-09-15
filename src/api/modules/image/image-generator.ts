import { loadImage, Canvas, registerFont, CanvasRenderingContext2D, Image } from 'canvas';

export default class ImageGenerator {
  constructor() {
    registerFont(__dirname + '/NotoSans-Bold.ttf', { family: 'NatoSans Bold' });
    registerFont(__dirname + '/NotoSans-Medium.ttf', { family: 'NatoSans Medium' });
  }

  async addBackgroundToCanvas(ctx: CanvasRenderingContext2D, canvas: Canvas, backgroundURL: string) {
    if (backgroundURL && backgroundURL.includes('api'))
      throw Error('I don\'t think that\'s a good idea... 🤔');

    try {
      let background: Image;
      if(!backgroundURL) {
        background = await loadImage(`https://i.imgur.com/hTmRngI.png`);
      } else background = await loadImage(backgroundURL);
      ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
      this.roundedRect(ctx, 16, 16, canvas.width - 32, canvas.height - 32, 16);
      ctx.stroke();
      ctx.fillStyle = '#00000060';
      ctx.fill();



    } catch {}
  }
  applyText(canvas: Canvas, text: string) {
    const context = canvas.getContext('2d');
    let fontSize = 70;

    do
      context.font = `${fontSize -= 8}px Roboto, sans-serif`;
    while (context.measureText(text).width > canvas.width - 275);
    return context.font;
  }
  wrapText(ctx, text: string, x: number, y: number, maxWidth: number, lineHeight = 15) {
    let words = text.split(' ');
    let line = '';

    for (let n = 0; n < words.length; n++) {
      let testLine = line + words[n] + ' ';
      let metrics = ctx.measureText(testLine);
      let testWidth = metrics.width;
      if (testWidth > maxWidth && n > 0) {
        ctx.fillText(line, x, y);
        line = words[n] + ' ';
        y += lineHeight;
      } else
        line = testLine;
    }
    ctx.fillText(line, x, y);
  }

  public roundedRect(ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number, radius: number) {
    ctx.beginPath();
    ctx.moveTo(x, y + radius);
    ctx.lineTo(x, y + height - radius);
    ctx.arcTo(x, y + height, x + radius, y + height, radius);
    ctx.lineTo(x + width - radius, y + height);
    ctx.arcTo(x + width, y + height, x + width, y + height-radius, radius);
    ctx.lineTo(x + width, y + radius);
    ctx.arcTo(x + width, y, x + width - radius, y, radius);
    ctx.lineTo(x + radius, y);
    ctx.arcTo(x, y, x, y + radius, radius);
  }
}