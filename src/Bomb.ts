import FallingDrawable from "./FallingDrawable";

export default class Bomb extends FallingDrawable {
  constructor(context: CanvasRenderingContext2D) {
    super(context, "bomb", 67, 67);
  }
}
