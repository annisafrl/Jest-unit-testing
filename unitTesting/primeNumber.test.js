const mathFunc = require("../helpers/mathFunc");

test("the result should be return number", () => {
  expect(isNaN(mathFunc.generateNprimeNumber(2))).toBeFalsy();
});

test("the result should be return integer", () => {
  expect(Number.isInteger(2)).toBeTruthy();
});

test("the result should be return positive", () => {
  expect(mathFunc.generateNprimeNumber(2)).toBeGreaterThan(0);
});

test("the result should be start with number 2", () => {
  expect(mathFunc.generateNprimeNumber(2)).toBeGreaterThanOrEqual(2);
});

test("the number only can divide by its own number and 1", () => {
  expect(mathFunc.realPrime(mathFunc.generateNprimeNumber(4))).toBeTruthy();
});
