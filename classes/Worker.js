import util from "../utils/Util.js";
export default class Worker {
    /**
     *
     * @param name string
     */
    constructor(name) {
        this.id = util.generateId();
        this.gold = 0;
        this.power = 1;
        this.name = name;
    }
    mineGold(value) {
        this.gold += value * this.power;
        return value * this.power;
    }
    speak() {
        return this.name;
    }
    setPower(increment) {
        this.power += increment;
        return increment;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
}
