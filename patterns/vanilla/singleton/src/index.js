import "./redButton";
import "./blueButton";

// checking supercounter
import Counter from "./singleton-counter";
import SuperCounter from "./superCounter";
const counter = new SuperCounter();
const log = counter.increment();
counter.increment();
counter.increment();
console.log("Counter in counter.js: ", Counter.getCount());
console.log("SuperCounter in counter.js: ", log);

console.log("Click on either of the buttons 🚀!");
