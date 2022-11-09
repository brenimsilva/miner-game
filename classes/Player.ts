import IPlayer from "../interfaces/IPlayer.js";
import Item from "./Item.js";
import Worker from "./Worker.js";

export default class Player implements IPlayer {
  private workers: Array<Worker> = [];
  private name: string = "Jogador";
  private gold: number = 0;
  private items: Array<Item> = [];

  constructor() {}

  addWorker(worker: Worker): string {
    this.workers.push(worker);
    return `Worker: ${worker.getName()} added!`;
  }

  removeWorker(worker: Worker): string {
    this.workers = this.workers.filter((w) => {
      return worker.getId() !== w.getId();
    });

    return `Worker: ${worker.getName()} removed!`;
  }

  updateGold(value: number): string {
    this.workers.forEach((worker) => {
      this.gold += worker.mineGold(value);
    });
    return `Your total gold: ${this.gold}`;
  }
}
