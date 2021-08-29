export default abstract class Drawable {
  context: CanvasRenderingContext2D;
  positionX: number;
  positionY: number;

  constructor(
    context: CanvasRenderingContext2D,
    positionX: number,
    positionY: number
  ) {
    this.context = context;
    this.positionX = positionX;
    this.positionY = positionY;
  }

  abstract draw(): void;
}
