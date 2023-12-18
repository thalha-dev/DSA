function searchMatrix(matrix: number[][], target: number): boolean {
  const matrixLength: number = matrix.length * matrix[0].length;
  const columnLength: number = matrix[0].length;


  let L: number = 0;
  let R: number = matrixLength - 1;

  while (L <= R) {
    let mid = Math.round(L + (R - L) / 2);
    let midRow = Math.floor(mid / columnLength);
    let midColumn = mid - midRow * columnLength;
    if (matrix[midRow][midColumn] === target) {
      return true;
    } else if (matrix[midRow][midColumn] > target) {
      R = mid - 1;
    } else if (matrix[midRow][midColumn] < target) {
      L = mid + 1;
    }
  }

  return false;
}

console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    34,
  ),
);

console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    13,
  ),
);

export default searchMatrix;
