import DrawableImage from "./DrawableImage";

export default class Heart extends DrawableImage {
  speed: number;

  constructor(
    context: CanvasRenderingContext2D,
    positionX: number,
    positionY: number,
    sprite = "../public/sprites/heart.png"
  ) {
    super(context, sprite, positionX, positionY, 40, 40);
    this.speed = 5;
  }

  loseLife(): void {
    this.sprite.src = "../public/sprites/heart-empty.png";
  }
}
