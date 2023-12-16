type Board = boolean[][];

const isValidSudoku = (board: string[][]): boolean => {
  const size = 9;
  const presence: Board = Array.from({ length: size * 3 }, () =>
    Array(size).fill(false),
  );

  for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {
      const char = board[row][col];
      if (char === ".") continue;

      const num = Number(char) - 1;

      const inRow = presence[row][num];
      const inCol = presence[col + size][num];
      const inBox =
        presence[Math.floor(row / 3) * 3 + Math.floor(col / 3) + size * 2][num];

      if (inRow || inCol || inBox) {
        return false;
      }

      presence[row][num] = true;
      presence[col + size][num] = true;
      presence[Math.floor(row / 3) * 3 + Math.floor(col / 3) + size * 2][num] =
        true;
    }
  }

  return true;
};

// Example usage
const sudokuBoard: string[][] = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

console.log(isValidSudoku(sudokuBoard));

console.log(
  isValidSudoku([
    ["8", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ]),
);
