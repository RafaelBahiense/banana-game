import Drawable from "./Drawable";

export default abstract class DrawableImage extends Drawable {
  sprite: HTMLImageElement;
  sizeX: number;
  sizeY: number;

  constructor(
    context: CanvasRenderingContext2D,
    sprite: string,
    positionX: number,
    positionY: number,
    sizeX: number,
    sizeY: number
  ) {
    super(context, positionX, positionY);
    this.sizeX = sizeX;
    this.sizeY = sizeY;
    this.sprite = new Image();
    this.sprite.src = sprite;
  }

  draw() {
    this.context.drawImage(
      this.sprite,
      this.positionX,
      this.positionY,
      this.sizeX,
      this.sizeY
    );
  }
}
