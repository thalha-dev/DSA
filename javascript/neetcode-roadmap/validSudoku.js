/**
 * Hash Map - Matrix
 * Time O(ROWS * COLS) | Space O(ROWS * COLS)
 * https://leetcode.com/problems/valid-sudoku/
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = (board) => {
  const boards = 3;
  const [boxes, cols, rows] =
    getBoards(boards); /* Time O(ROWS * COLS) | Space O(ROWS * COLS) */

  return searchGrid(
    board,
    boxes,
    cols,
    rows,
  ); /* Time O(ROWS * COLS) | Space O(ROWS * COLS) */
};

var initBoard = (rows, cols) =>
  new Array(rows).fill().map(() => new Array(cols).fill(false));

var getBoards = (boards) => {
  const [rows, cols] = [9, 9];

  return new Array(boards).fill().map(() => initBoard(rows, cols));
};

var searchGrid = (board, boxes, cols, rows) => {
  const [_rows, _cols] = [9, 9];

  for (let row = 0; row < _rows; row++) {
    /* Time O(ROWS)*/
    for (let col = 0; col < _cols; col++) {
      /* Time O(COLS)*/
      const char = board[row][col];
      const index = Math.floor(row / 3) * 3 + Math.floor(col / 3);

      const isEmpty = char === ".";
      if (isEmpty) continue;

      const hasMoved =
        boxes[index][char - 1] || cols[col][char - 1] || rows[row][char - 1];
      if (hasMoved) return false;

      rows[row][char - 1] = true; /* Space O(ROWS * COLS)*/
      cols[col][char - 1] = true; /* Space O(ROWS * COLS)*/
      boxes[index][char - 1] = true; /* Space O(ROWS * COLS)*/
    }
  }

  return true;
};

/**
 * Array - Fixed Size
 * Time O(ROWS * COLS) | Space O(CELLS)
 * https://leetcode.com/problems/valid-sudoku/
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = (board) => {
  const [boards, cells] = [3, 9];
  const [boxes, rows, cols] = getBoards(
    boards,
    cells,
  ); /* Time O(ROWS * COLS) | Space O(CELLS) */

  return searchGrid(
    board,
    boxes,
    rows,
    cols,
  ); /* Time O(ROWS * COLS) | Space O(CELLS) */
};

var getBoards = (boards, cells) =>
  new Array(boards).fill().map(() => new Array(cells).fill(0));

var searchGrid = (board, boxes, rows, cols) => {
  const [_rows, _cols] = [9, 9];

  for (let row = 0; row < _rows; row++) {
    /* Time O(ROWS)*/
    for (let col = 0; col < _cols; col++) {
      /* Time O(COLS)*/
      const char = board[row][col];
      const position = 1 << (char - 1);
      const index = Math.floor(row / 3) * 3 + Math.floor(col / 3);

      const isEmpty = char === ".";
      if (isEmpty) continue;

      const hasMoved =
        boxes[index] & position || cols[col] & position || rows[row] & position;
      if (hasMoved) return false;

      rows[row] |= position; /* Space O(CELLS)*/
      cols[col] |= position; /* Space O(CELLS)*/
      boxes[index] |= position; /* Space O(CELLS)*/
    }
  }

  return true;
};

var isValidSudoku = (board) => {
  const cols = new Array(9).fill(null).map(() => new Set());
  const rows = new Array(9).fill(null).map(() => new Set());
  const squares = new Array(9).fill(null).map(() => new Set());

  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      const cell = board[r][c];
      if (cell === ".") {
        continue;
      }

      if (
        rows[r].has(cell) ||
        cols[c].has(cell) ||
        squares[Math.floor(r / 3) * 3 + Math.floor(c / 3)].has(cell)
      ) {
        return false;
      }

      rows[r].add(cell);
      cols[c].add(cell);
      squares[Math.floor(r / 3) * 3 + Math.floor(c / 3)].add(cell);
    }
  }

  return true;
};

const sudokuBoard = [
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

const sudokuBoard2 = [
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

console.log(isValidSudoku(sudokuBoard)); // Output: true
console.log(isValidSudoku(sudokuBoard2)); // Output: true
