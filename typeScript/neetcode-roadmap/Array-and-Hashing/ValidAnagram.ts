// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false
//

// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.

function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }

  const table = new Map();

  for (const char of s) {
    table.set(char, (table.get(char) ?? 0) + 1);
  }

  for (const char of t) {
    if (table.has(char)) {
      table.set(char, table.get(char) - 1);
    } else {
      return false;
    }
  }

  for (const count of table.values()) {
    if (count !== 0) {
      return false;
    }
  }

  return true;
}

console.log(isAnagram("anagram", "nagaram"));
