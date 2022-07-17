import "./style.css";
import { setupCounter } from "./counter.js";

document.querySelector("#app").innerHTML = `
  <button id="counter" type="button"></button>
`;

setupCounter(document.querySelector("#counter"));
