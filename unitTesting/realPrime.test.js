const mathFunc = require("../helpers/mathFunc");

test("the number only can divide by its own number and 1", () => {
  expect(mathFunc.realPrime(3)).toBeTruthy();
});
