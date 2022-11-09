class Util {
    constructor() {
        this.id = 0;
    }
    generateId() {
        return ++this.id;
    }
}
const util = new Util();
export default util;
