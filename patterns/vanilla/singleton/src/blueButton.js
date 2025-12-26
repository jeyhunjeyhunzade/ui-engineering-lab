import Counter from "./singleton-counter";
import { regularCounter } from "./regular-counter";

const button = document.getElementById("blue");
button.addEventListener("click", () => {
  Counter.increment();
  console.log("Counter total: ", Counter.getCount());
  //   console.log("Counter total: ", singletonCounter.increment());
});
