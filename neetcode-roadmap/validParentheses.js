/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const openningBrackets = new Set(["{", "(", "["]);
  const closingBrackets = new Set(["}", ")", "]"]);
  const brackets = new Set(["{", "(", "[", "}", ")", "]"]);
  const pair = new Map([
    ["]", "["],
    [")", "("],
    ["}", "{"],
  ]);

  const bracketStack = [];

  for (const char of s) {
    if (brackets.has(char)) {
      if (openningBrackets.has(char)) {
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
    console.log(bracketStack);
  }

  if (bracketStack.length) {
    return false;
  }

  return true;
};

/**
 * Time O(N) | Space O(N)
 * https://leetcode.com/problems/valid-parentheses/
 * @param {string} s
 * @return {boolean}
 */
var isValid = (s, stack = []) => {
  for (const bracket of s.split("")) {
    /* Time O(N) */
    const isParenthesis = bracket === "(";
    if (isParenthesis) stack.push(")"); /* Space O(N) */

    const isCurlyBrace = bracket === "{";
    if (isCurlyBrace) stack.push("}"); /* Space O(N) */

    const isSquareBracket = bracket === "[";
    if (isSquareBracket) stack.push("]"); /* Space O(N) */

    const isOpenPair = isParenthesis || isCurlyBrace || isSquareBracket;
    if (isOpenPair) continue;

    const isEmpty = !stack.length;
    const isWrongPair = stack.pop() !== bracket;
    const isInvalid = isEmpty || isWrongPair;
    if (isInvalid) return false;
  }

  return stack.length === 0;
};

/**
 * Time O(N) | Space O(N)
 * https://leetcode.com/problems/valid-parentheses/
 * @param {string} s
 * @return {boolean}
 */
var isValid = (s, stack = []) => {
  const map = {
    "}": "{",
    "]": "[",
    ")": "(",
  };

  for (const char of s) {
    /* Time O(N) */
    const isBracket = char in map;
    if (!isBracket) {
      stack.push(char);
      continue;
    } /* Space O(N) */

    const isEqual = stack[stack.length - 1] === map[char];
    if (isEqual) {
      stack.pop();
      continue;
    }

    return false;
  }

  return stack.length === 0;
};

console.log(isValid("[]{{{{{{{}}}}}}}"));
