import Player from "./Player";
import FallingDrawable from "./FallingDrawable";
import Fruit from "./Fruit";
import Bomb from "./Bomb";
import Rectangle from "./Rectangle";
import Heart from "./Heart";

export default class Game {
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  intervalsIds: number[];
  player: Player;
  fallingDrawable: FallingDrawable[];
  floor: Rectangle;
  gameBar: Rectangle;
  hearts: Heart[];
  HP: number;
  score: number;
  scoreDisplay: HTMLElement;

  constructor(
    screenWidth: number,
    screenHeight: number,
    canvas: HTMLCanvasElement,
    scoreDisplay: HTMLElement
  ) {
    this.canvas = canvas;
    this.canvas.width = screenWidth;
    this.canvas.height = screenHeight;
    this.context = this.canvas.getContext("2d");
    this.player = new Player(this.context, 130, canvas.width, canvas.height);
    this.fallingDrawable = [new Fruit(this.context)];
    this.floor = new Rectangle(
      this.context,
      5,
      canvas.height - 31,
      365,
      1,
      "white"
    );
    this.gameBar = new Rectangle(this.context, 0, 0, 375, 65, "black");
    this.hearts = [
      new Heart(this.context, 11, 12),
      new Heart(this.context, 51, 12),
      new Heart(this.context, 91, 12),
      new Heart(this.context, 131, 12),
    ];
    this.score = 0;
    this.scoreDisplay = scoreDisplay;
  }

  start() {
    this.startIntervals();
  }

  startIntervals() {
    this.clearIntervals();
    const { setInterval } = window;

    this.intervalsIds = [
      setInterval(() => this.gameLoop(), 1000 / 60),
      setInterval(() => this.spawnFruit(), 5000),
      setInterval(() => this.spawnBomb(), 10500),
    ];
  }

  clearIntervals() {
    this.intervalsIds?.forEach(clearInterval);
  }

  gameLoop() {
    this.updateState();
    this.renderGame();
    this.despawn();
  }

  keyboard(event: KeyboardEvent) {
    this.player.move(event);
  }

  updateState() {
    this.fallingDrawable.forEach((fruit) =>
      fruit.updateState(this.canvas.height - 160, this)
    );
    this.scoreDisplay.innerHTML = `Score ${this.score || 0}`;
  }

  spawnFruit() {
    this.fallingDrawable.push(new Fruit(this.context));
  }

  spawnBomb() {
    this.fallingDrawable.push(new Bomb(this.context));
  }

  despawn() {
    this.fallingDrawable = this.fallingDrawable.filter(
      (fruit) => fruit.active === true
    );
  }

  renderGame() {
    this.clearScreen();
    this.player.draw();
    this.fallingDrawable.forEach((fruit) => fruit.draw());
    this.floor.draw();
    this.gameBar.draw();
    this.hearts.forEach((heart) => heart.draw());
  }

  endGame() {
    this.clearIntervals();
    const replay = confirm(
      `Fim do jogo! Você fez ${this.score} pontos!\nDeseja jogar novamente?`
    );
    if (replay) {
      this.clearProperties();
      this.startIntervals();
    }
  }

  clearProperties() {
    this.player = new Player(
      this.context,
      130,
      this.canvas.width,
      this.canvas.height
    );
    this.fallingDrawable = [new Fruit(this.context)];
    this.hearts = [
      new Heart(this.context, 11, 12),
      new Heart(this.context, 51, 12),
      new Heart(this.context, 91, 12),
      new Heart(this.context, 131, 12),
    ];
    this.score = 0;
  }

  clearScreen() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}
