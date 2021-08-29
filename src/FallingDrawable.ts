import DrawableImage from "./DrawableImage";
import { randomIntFromInterval } from "./helpers";

export default abstract class FallingDrawable extends DrawableImage {
  speed: number;
  active: boolean;

  constructor(
    context: CanvasRenderingContext2D,
    sprite: string,
    sizeX: number,
    sizeY: number
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
  }

  private move(speed: number): void {
    this.positionY += speed;
  }

  updateState(floorLevel: number) {
    this.move(1);
    this.cheackCollisonFloor(floorLevel);
  }

  private cheackCollisonFloor(floorLevel: number) {
    if (this.positionY > floorLevel + this.sizeY) this.active = false;
  }
}
