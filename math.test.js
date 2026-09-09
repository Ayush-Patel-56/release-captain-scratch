import test from "node:test";
import assert from "node:assert/strict";
import { add, subtract, multiply } from "./math.js";

test("add", () => {
  assert.equal(add(2, 3), 5);
});

test("subtract", () => {
  assert.equal(subtract(5, 2), 3);
});

test("multiply", () => {
  assert.equal(multiply(4, 5), 20);
});
