package com.thalha.neetcoderoadmap.arrayAndHashing;

import java.util.HashSet;
import java.util.Set;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class ContainsDuplicate {

  private static final Logger LOGGER = LoggerFactory.getLogger(ContainsDuplicate.class);

  private class Solution {
    public boolean containsDuplicate(int[] nums) {
      Set<Integer> uniques = new HashSet<>();
      for (int i = 0; i < nums.length; i++) {
        if (uniques.contains(nums[i])) {
          return true;
        }
        uniques.add(nums[i]);
      }
      return false;
    }
  }

  public void run() {
    Solution solution = new Solution();
    int[] nums = { 1, 2, 3, 1 };
    boolean result = solution.containsDuplicate(nums);
    LOGGER.info("Result: " + result);
  }
}
