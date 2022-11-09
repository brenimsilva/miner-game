import IWorker from "../interfaces/IWorker.js";
import util from "../utils/Util.js";

export default class Worker implements IWorker {
  private readonly id: number = util.generateId();
  private name: string;
  private gold: number = 0;
  private power: number = 1;

  /**
   *
   * @param name string
   */
  constructor(name: string) {
    this.name = name;
  }

  mineGold(value: number): number {
    this.gold += value * this.power;
    return value * this.power;
  }

  speak(): string {
    return this.name;
  }

  setPower(increment: number): number {
    this.power += increment;
    return increment;
  }

  getId(): number {
    return this.id;
  }
  getName(): string {
    return this.name;
  }
}
