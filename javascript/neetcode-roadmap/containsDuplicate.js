/**
 * Brute Force - Linear Search
 * Time O(N^2) | Space O(1)
 * https://leetcode.com/problems/contains-duplicate/
 * @param {number[]} nums
 * @return {boolean}
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i !== j) {
        if (nums[i] === nums[j]) {
          return true;
        }
      }
    }
  }
  return false;
};

/**
 * Sort - HeapSort Space O(1) | QuickSort Space O(log(N))
 * Time O(N * log(N)) | Space O(1)
 * https://leetcode.com/problems/contains-duplicate/
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = (nums) => {
  nums.sort((a, b) => a - b); /* Time O(N * log(N)) | Space O(1 || log(N)) */

  return hasDuplicate(nums);
};

const hasDuplicate = (nums) => {
  for (let curr = 0; curr < nums.length - 1; curr++) {
    /* Time O(N) */
    const next = curr + 1;

    const isNextDuplicate = nums[curr] === nums[next];
    if (isNextDuplicate) return true;
  }

  return false;
};

/**
 * Hash Set
 * Time O(N) | Space O(N)
 * https://leetcode.com/problems/contains-duplicate/
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = (nums) => {
  const numsSet = new Set(nums); /* Time O(N) | Space O(N) */
  const isEqual = numsSet.size === nums.length;

  return !isEqual;
};

/**
 * Hash Set - Early Exit
 * Time O(N) | Space O(N)
 * https://leetcode.com/problems/contains-duplicate/
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = (nums, numsSet = new Set()) => {
  for (const num of nums) {
    /* Time O(N) */
    if (numsSet.has(num)) return true;

    numsSet.add(num); /* Space O(N) */
  }

  return false;
};
