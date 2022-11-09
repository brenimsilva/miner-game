class Util {
  private id: number = 0;

  public generateId(): number {
    return ++this.id;
  }
}

const util = new Util();

export default util;
