export default interface IWorker {
  mineGold(value: number): number;
  speak(line: string): string;
  setPower(increment: number): number;
  getId(): number;
  getName(): string;
}
