import Game from "./Game";

const canvas = document.getElementById("canvas") as HTMLCanvasElement;

const game = new Game(375, 812, canvas);
game.start();

window.addEventListener("keydown", (event: KeyboardEvent) => {});

window.addEventListener("keyup", (event: KeyboardEvent) => {});
