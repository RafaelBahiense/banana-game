import Game from "./Game";

const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const scoreDisplay = document.getElementById("score") as HTMLElement;

const game = new Game(375, 812, canvas, scoreDisplay);
document.addEventListener("keydown", (e) => game.keyboard(e));
game.start();
