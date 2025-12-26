let instance;
let counter = 0;

class Counter {
  constructor() {
    if (instance) {
      throw new Error(
        "Instance already exists. Use Counter.getInstance() to access it."
      );
    }
    instance = this;
  }

  getInstance() {
    return this;
  }

  getCount() {
    return counter;
  }

  increment() {
    return ++counter;
  }

  decrement() {
    return --counter;
  }
}

const singleTonCounter = Object.freeze(new Counter());
export default singleTonCounter;
