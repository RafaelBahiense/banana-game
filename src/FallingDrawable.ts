import DrawableImage from "./DrawableImage";
import Game from "./Game";
import { randomIntFromInterval } from "./helpers";

export default abstract class FallingDrawable extends DrawableImage {
  speed: number;
  active: boolean;
  radius: number;

  constructor(
    context: CanvasRenderingContext2D,
    sprite: string,
    sizeX: number,
    sizeY: number,
    radius: number
  ) {
    const fruitIndex = randomIntFromInterval(0, 4);
    super(
      context,
      "../public/sprites/" + sprite + ".png",
      randomIntFromInterval(3, 307),
      70,
      sizeX,
      sizeY
    );
    this.speed = 5;
    this.active = true;
    this.radius = radius;
  }

  private move(speed: number): void {
    this.positionY += speed;
  }

  updateState(floorLevel: number, game: Game) {
    this.move(1);
    this.cheackCollisonFloor(floorLevel, game);
    game.player.checkCollision(game, this);
  }

  abstract cheackCollisonFloor(floorLevel: number, game: Game): void;
  abstract collison(game: Game): void;
}
