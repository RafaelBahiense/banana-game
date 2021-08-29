import Drawable from "./Drawable";

export default class Rectangle extends Drawable {
  width: number;
  height: number;
  color: string;

  constructor(
    context: CanvasRenderingContext2D,
    positionX: number,
    positionY: number,
    width: number,
    height: number,
    color: string
  ) {
    super(context, positionX, positionY);
    this.positionX = positionX;
    this.positionY = positionY;
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    this.context.beginPath();
    this.context.fillStyle = this.color;
    this.context.fillRect(
      this.positionX,
      this.positionY,
      this.width,
      this.height
    );
    this.context.stroke();
  }
}
