function threeSum(nums: number[]): number[][] {
  const res: number[][] = [];
  nums = nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] == nums[i - 1]) {
      continue;
    }

    let L = i + 1;
    let R = nums.length - 1;
    while (L < R) {
      let sum = nums[i] + nums[L] + nums[R];

      if (sum > 0) {
        R -= 1;
      } else if (sum < 0) {
        L += 1;
      } else {
        res.push([nums[i], nums[L], nums[R]]);
        L += 1;
        while (nums[L] == nums[L - 1] && L < R) {
          L += 1;
        }
      }
    }
  }
  return res;
}

export default threeSum;
