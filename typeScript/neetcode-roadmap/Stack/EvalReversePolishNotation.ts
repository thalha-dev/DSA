const evalRPN = (tokens: string[]): number => {
  const operators = new Set(["+", "-", "/", "*"]);
  const stack: number[] = [];

  for (const elem of tokens) {
    if (operators.has(elem)) {
      const num1 = stack.pop()!;
      const num2 = stack.pop()!;

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

  return stack.pop()!;
};

// Example usage
const result = evalRPN(["2", "1", "+", "3", "*"]);
console.log(result); // Output: 9

export { evalRPN };
