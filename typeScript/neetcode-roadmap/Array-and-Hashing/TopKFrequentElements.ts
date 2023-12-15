const topKFrequent = function (nums: number[], k: number): number[] {
  const mp: Map<number, number> = new Map();
  const arr: number[][] = new Array(nums.length + 1).fill(0).map(() => []);
  const ans: number[] = [];

  nums.forEach((el: number) => {
    const val: number = mp.get(el) || 0;
    mp.set(el, val + 1);
  });

  for (let [num, count] of mp) {
    const prev: number[] = arr[count] || [];
    prev.push(num);
    arr[count] = prev;
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    if (k < 1) break;
    if (arr[i]) {
      ans.push(...arr[i]);
      k = k - arr[i].length;
    }
  }

  return ans;
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3, 3, 3], 2));
