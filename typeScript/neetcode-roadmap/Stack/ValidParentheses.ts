const isValid = (s: string): boolean => {
  const openingBrackets = new Set(["{", "(", "["]);
  const closingBrackets = new Set(["}", ")", "]"]);
  const brackets = new Set(["{", "(", "[", "}", ")", "]"]);
  const pair = new Map<string, string>([
    ["]", "["],
    [")", "("],
    ["}", "{"],
  ]);

  const bracketStack: string[] = [];

  for (const char of s) {
    if (brackets.has(char)) {
      if (openingBrackets.has(char)) {
        bracketStack.push(char);
      }
      if (closingBrackets.has(char)) {
        if (bracketStack[bracketStack.length - 1] === pair.get(char)) {
          bracketStack.pop();
        } else {
          return false;
        }
      }
    }
  }

  if (bracketStack.length) {
    return false;
  }

  return true;
};

const result = isValid("{[()]}");
console.log(result); // Output: true

export { isValid };
