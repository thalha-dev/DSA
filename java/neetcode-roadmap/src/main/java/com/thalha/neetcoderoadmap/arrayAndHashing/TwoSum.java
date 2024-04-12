package com.thalha.neetcoderoadmap.arrayAndHashing;

import java.util.HashMap;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class TwoSum {

  private static final Logger LOGGER = LoggerFactory.getLogger(ContainsDuplicate.class);

  private class Solution {

    public int[] twoSum(int[] nums, int target) {
      Map<Integer, Integer> prevMap = new HashMap<>();

      for (int i = 0; i < nums.length; i++) {
        int num = nums[i];
        int diff = target - num;

        if (prevMap.containsKey(diff)) {
          return new int[] { prevMap.get(diff), i };
        }

        prevMap.put(num, i);
      }

      return new int[] {};
    }
  }

  public void run() {
    Solution sol = new Solution();
    int[] result = sol.twoSum(new int[] { 2, 3, 43, 42, 34 }, 44);
    LOGGER.info(
        "Result: Elements in index " + result[0] + " and index " + result[1] + " sums up to give the target value");
  }
}
