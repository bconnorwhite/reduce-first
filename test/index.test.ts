import { test, expect } from "@jest/globals";
import reduceFirst from "../source/index.js";

const list = ["a", "b", "c", "d", "e"];

test("basic", () => {
  const result = reduceFirst(list, (value) => {
    return value === "c" ? `found ${value}` : undefined;
  });
  expect(result).toBe("found c");
});

test("missing", () => {
  const result = reduceFirst(list, (value) => {
    return value === "x" ? `found ${value}` : undefined;
  });
  expect(result).toBe(undefined);
});

test("empty", () => {
  const result = reduceFirst([], (value) => {
    return value === "c" ? `found ${value}` : undefined;
  });
  expect(result).toBe(undefined);
});
