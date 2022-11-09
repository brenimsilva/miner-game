import Player from "./Player.js";
export default class Game {
  static goldLevel: number = 0;
  static start(player: Player): void {
    setInterval(() => {
      console.log(player.updateGold(this.goldLevel));
    }, 500);
  }
}
