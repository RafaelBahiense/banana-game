import Bomb from "./Bomb";
import DrawableImage from "./DrawableImage";
import FallingDrawable from "./FallingDrawable";
import Fruit from "./Fruit";
import Game from "./Game";

export default class Player extends DrawableImage {
  floorLevel: number;
  speed: number;

  constructor(
    context: CanvasRenderingContext2D,
    floorLevel: number,
    canvasWidth: number,
    canvasHeight: number,
    sprite = "../public/sprites/alienRight.png"
  ) {
    super(context, sprite, canvasWidth / 2, canvasHeight - floorLevel, 64, 97);
    this.speed = 5;
  }

  move(event: KeyboardEvent): void {
    if (event.code === "KeyA" && this.positionX > 2.5) {
      this.sprite.src = "../public/sprites/alienLeft.png";
      this.positionX -= this.speed;
    }
    if (event.code === "KeyD" && this.positionX < 307.5) {
      this.sprite.src = "../public/sprites/alienRight.png";
      this.positionX += this.speed;
    }
  }

  checkCollision(game: Game, fallingDrawable: FallingDrawable) {
    const distance = Math.sqrt(
      (this.positionX - fallingDrawable.positionX) ** 2 +
        (this.positionY - fallingDrawable.positionY) ** 2
    );
    if (distance < 40 + fallingDrawable.radius) {
      fallingDrawable.active = false;
      fallingDrawable.collison(game);
    }
  }
}
