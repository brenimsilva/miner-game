import Worker from "../classes/Worker.js";

export default interface IPlayer {
  addWorker(worker: Worker): string;
  removeWorker(worker: Worker): string;
  updateGold(value: number): string;
}
