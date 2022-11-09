export default class Player {
    constructor() {
        this.workers = [];
        this.name = "Jogador";
        this.gold = 0;
        this.items = [];
    }
    addWorker(worker) {
        this.workers.push(worker);
        return `Worker: ${worker.getName()} added!`;
    }
    removeWorker(worker) {
        this.workers = this.workers.filter((w) => {
            return worker.getId() !== w.getId();
        });
        return `Worker: ${worker.getName()} removed!`;
    }
    updateGold(value) {
        this.workers.forEach((worker) => {
            this.gold += worker.mineGold(value);
        });
        return `Your total gold: ${this.gold}`;
    }
}
