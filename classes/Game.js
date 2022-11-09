export default class Game {
    static start(player) {
        setInterval(() => {
            console.log(player.updateGold(this.goldLevel));
        }, 500);
    }
}
Game.goldLevel = 0;
