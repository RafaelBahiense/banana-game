import FallingDrawable from "./FallingDrawable";
import Game from "./Game";

export default class Fruit extends FallingDrawable {
  name: string;
  points: number;

  constructor(context: CanvasRenderingContext2D) {
    const fruit = selectFruit();
    super(context, fruit.name, fruit.x, fruit.y, fruit.radius);
    this.name = fruit.name;
    this.points = fruit.points;
  }

  cheackCollisonFloor(floorLevel: number, game: Game) {
    if (this.positionY > floorLevel + this.sizeY) this.active = false;
    game.HP -= 1;
  }
}

interface FruitProps {
  name: string;
  points?: number;
  x: number;
  y: number;
  radius: number;
}

function selectFruit() {
  const random = Math.random();
  const fruitRandom = random * 100;
  let fruit: FruitProps;
  if (fruitRandom < 30) {
    fruit = { name: "orange", points: 5, x: 65, y: 67, radius: 33 };
  } else if (fruitRandom < 60) {
    fruit = { name: "red-apple", points: 10, x: 65, y: 67, radius: 33 };
  } else if (fruitRandom < 80) {
    fruit = { name: "watermelon", points: 20, x: 82, y: 67, radius: 33 };
  } else if (fruitRandom < 95) {
    fruit = { name: "strawberry", points: 30, x: 66, y: 67, radius: 33 };
  } else if (fruitRandom < 100) {
    fruit = { name: "banana", x: 61, y: 67, radius: 33 };
  }

  return fruit;
}
