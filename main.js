import "./style.css";
import { setupCounter } from "./counter.js";

document.querySelector("#app").innerHTML = `
  <h1 class="app__headline">Grid Walk</h1>
  <div class="card">
    <button id="counter" type="button"></button>
  </div>
`;

setupCounter(document.querySelector("#counter"));
