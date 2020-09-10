const reduceFirst = require("../build")["default"];

const list = ["a", "b", "c", "d", "e"];

test("basic", () => {
  const result = reduceFirst(list, (value) => {
    if(value === "c") {
      return `found ${value}`;
    }
  });
  expect(result).toBe("found c");
});

test("missing", () => {
  const result = reduceFirst(list, (value) => {
    if(value === "x") {
      return `found ${value}`;
    }
  });
  expect(result).toBe(undefined);
});

test("empty", () => {
  const result = reduceFirst([], (value) => {
    if(value === "c") {
      return `found ${value}`;
    }
  });
  expect(result).toBe(undefined);
});
