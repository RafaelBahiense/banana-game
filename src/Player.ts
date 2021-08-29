import DrawableImage from "./DrawableImage";

export default class Player extends DrawableImage {
  floorLevel: number;
  speed: number;

  constructor(
    context: CanvasRenderingContext2D,
    floorLevel: number,
    canvasWidth: number,
    canvasHeight: number,
    sprite = "../public/sprites/alien.png"
  ) {
    super(context, sprite, canvasWidth / 2, canvasHeight - floorLevel, 64, 97);
    this.speed = 5;
  }

  move(event: KeyboardEvent): void {
    console.log(event.code);
    if (event.code === "KeyA" && this.positionX > 2.5) {
      //this.flip();
      this.positionX -= this.speed;
    }
    if (event.code === "KeyD" && this.positionX < 307.5) {
      //this.flip();
      this.positionX += this.speed;
    }
    console.log(this.positionX);
  }

  flip() {
    this.context.scale(-1, 1);
    this.draw();
  }
}
