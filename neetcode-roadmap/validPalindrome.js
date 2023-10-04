/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let pattern = /[^a-z0-9]*/g;
  let stringToTest = s.toLocaleLowerCase().replace(pattern, "");

  for (
    let i = 0, j = stringToTest.length - 1;
    i < stringToTest.length / 2;
    i++, j--
  ) {
    if (stringToTest.charAt(i) !== stringToTest.charAt(j)) {
      return false;
    }
  }

  return true;
};

var isPalindrome = function (s) {
  let pattern = /[a-zA-Z0-9]/;

  for (let i = 0, j = s.length - 1; i < s.length - 1; ) {
    if (!pattern.test(s.charAt(i))) {
      i++;
      continue;
    }

    if (!pattern.test(s.charAt(j))) {
      j--;
      continue;
    }

    if (convertToLowercase(s.charAt(i)) !== convertToLowercase(s.charAt(j))) {
      return false;
    }

    if (i - j === 0) {
      break;
    }

    i++;
    j--;
  }

  return true;
};

function convertToLowercase(uppercaseLetter) {
  switch (uppercaseLetter) {
    case "A":
      return "a";
    case "B":
      return "b";
    case "C":
      return "c";
    case "D":
      return "d";
    case "E":
      return "e";
    case "F":
      return "f";
    case "G":
      return "g";
    case "H":
      return "h";
    case "I":
      return "i";
    case "J":
      return "j";
    case "K":
      return "k";
    case "L":
      return "l";
    case "M":
      return "m";
    case "N":
      return "n";
    case "O":
      return "o";
    case "P":
      return "p";
    case "Q":
      return "q";
    case "R":
      return "r";
    case "S":
      return "s";
    case "T":
      return "t";
    case "U":
      return "u";
    case "V":
      return "v";
    case "W":
      return "w";
    case "X":
      return "x";
    case "Y":
      return "y";
    case "Z":
      return "z";
    default:
      return uppercaseLetter;
  }
}

let s = "A man, a plan, a canal: Panama";

console.log(isPalindrome(s));
