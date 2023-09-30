/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const operators = new Set(["+", "-", "/", "*"]);
  const stack = [];

  for (const elem of tokens) {
    if (operators.has(elem)) {
      const num1 = stack.pop();
      const num2 = stack.pop();

      let res = 0;

      if (elem === "+") {
        res = num2 + num1;
      } else if (elem === "*") {
        res = num2 * num1;
      } else if (elem === "-") {
        res = num2 - num1;
      } else if (elem === "/") {
        res = Math.trunc(num2 / num1);
      }

      stack.push(res);
      continue;
    }

    stack.push(Number(elem));
  }

  return stack.pop();
};

let token1 = ["2", "1", "+", "3", "*"];
let token2 = ["4", "13", "5", "/", "+"];
let token3 = [
  "10",
  "6",
  "9",
  "3",
  "+",
  "-11",
  "*",
  "/",
  "*",
  "17",
  "+",
  "5",
  "+",
];

console.log(evalRPN(token1));
console.log(evalRPN(token2));
console.log(evalRPN(token3));
