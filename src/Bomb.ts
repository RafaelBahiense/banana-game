import FallingDrawable from "./FallingDrawable";
import Game from "./Game";

export default class Bomb extends FallingDrawable {
  constructor(context: CanvasRenderingContext2D) {
    super(context, "bomb", 67, 67, 25);
  }
  cheackCollisonFloor(floorLevel: number, _: Game) {
    if (this.positionY > floorLevel + this.sizeY) this.active = false;
  }
}
