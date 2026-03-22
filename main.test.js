import { describe, it } from "node:test";
import assert from "node:assert";
import fs from "node:fs";
import { setupCounter } from "./counter.js";

describe("main.js integration tests", () => {
  it("should verify index.html structure", () => {
    const html = fs.readFileSync("./index.html", "utf-8");
    // Check if the app container exists as expected by main.js
    assert.match(html, /<div id="app"><\/div>/);
  });

  it("should test setupCounter logic simulating DOM interaction", () => {
    // Mock DOM element since we are in Node.js environment without jsdom
    const element = {
      _innerHTML: "",
      get innerHTML() {
        return this._innerHTML;
      },
      set innerHTML(value) {
        this._innerHTML = value;
      },
      listeners: {},
      addEventListener(event, fn) {
        this.listeners[event] = fn;
      },
      // Helper to simulate click
      click() {
        if (this.listeners["click"]) {
          this.listeners["click"]();
        }
      },
    };

    // Initialize counter
    setupCounter(element);

    // Verify initial state
    assert.strictEqual(element.innerHTML, "count is 0");

    // Simulate interactions
    element.click();
    assert.strictEqual(element.innerHTML, "count is 1");

    element.click();
    assert.strictEqual(element.innerHTML, "count is 2");
  });
});
