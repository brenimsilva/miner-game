var _a;
import Game from "./classes/Game.js";
import Player from "./classes/Player.js";
import ElementTag from "./classes/ElementTag.js";
const player1 = new Player();
Game.goldLevel = 1;
Game.start(player1);
(_a = ElementTag.gameLevel) === null || _a === void 0 ? void 0 : _a.innerText = "a";
