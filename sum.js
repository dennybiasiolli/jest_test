export const sum = (a, b) => a + b;

export class TestClass {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  sum() {
    return this.a + this.b;
  }

  sumAsync() {
    return new Promise((resolve) => {
      setTimeout(() => {
        return resolve(this.a + this.b);
      }, 1000);
    });
  }
}
