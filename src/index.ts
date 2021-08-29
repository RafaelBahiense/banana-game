import Game from "./Game";

const canvas = document.getElementById("canvas") as HTMLCanvasElement;

const game = new Game(375, 812, canvas);
document.addEventListener("keydown", (e) => game.keyboard(e));
game.start();
