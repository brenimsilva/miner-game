import Worker from "./classes/Worker.js";
import Game from "./classes/Game.js";
import Player from "./classes/Player.js";
import ElementTag from "./classes/ElementTag.js";

const player1 = new Player();
Game.goldLevel = 1;
Game.start(player1);

ElementTag.gameLevel?.innerText = "a";
