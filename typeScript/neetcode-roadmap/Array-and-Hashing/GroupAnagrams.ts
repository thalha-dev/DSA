let groupAnagrams = (
  words: string[],
  map: Map<string, string[]> = new Map(),
): string[][] => {
  if (!words.length) return [];

  groupWords(words, map); /* Time O(N * K) | Space O(N * K) */

  return [...map.values()]; /* Time O(N)     | Space O(N * K) */
};

let groupWords = (words: string[], map: Map<string, string[]>): void => {
  for (const original of words) {
    /* Time O(N) */
    const hash: string = getHash(original); /* Time O(K) | Space O(1) */
    const values: string[] = map.get(hash) || [];

    values.push(original); /*           | Space O(N) */
    map.set(hash, values); /*           | Space O(N * K) */
  }
};

const getHash = (word: string): string => {
  const frequency: number[] = new Array(26).fill(0);

  for (const char of word) {
    /* Time O(K) */
    const charCode: number = getCode(char); /* Time O(1) | Space (1) */

    frequency[charCode]++; /*           | Space O(1) */
  }

  return buildHash(frequency);
};

const getCode = (char: string): number =>
  char.charCodeAt(0) - "a".charCodeAt(0);

const buildHash = (frequency: number[]): string => frequency.toString();

export { groupAnagrams };
