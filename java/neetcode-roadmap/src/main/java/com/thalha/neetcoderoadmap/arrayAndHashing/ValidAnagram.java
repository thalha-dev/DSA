package com.thalha.neetcoderoadmap.arrayAndHashing;

import java.util.HashMap;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class ValidAnagram {

  private static final Logger LOGGER = LoggerFactory.getLogger(ContainsDuplicate.class);

  private class Solution {
    public boolean isAnagram(String s, String t) {
      if (s.length() != t.length()) {
        return false;
      }
      Map<Character, Integer> counts = new HashMap<>();
      for (int i = 0; i < s.length(); i++) {
        counts.put(s.charAt(i), counts.getOrDefault(s.charAt(i), 0) + 1);
        counts.put(t.charAt(i), counts.getOrDefault(t.charAt(i), 0) - 1);
      }
      for (int count : counts.values()) {
        if (count != 0) {
          return false;
        }
      }
      return true;
    }

    public boolean isAnagram2(String s, String t) {
      if (s.length() != t.length())
        return false;

      int[] store = new int[26];

      for (int i = 0; i < s.length(); i++) {
        store[s.charAt(i) - 'a']++;
        store[t.charAt(i) - 'a']--;
      }

      for (int n : store)
        if (n != 0)
          return false;

      return true;
    }

  }

  public void run() {
    Solution validAnagram = new Solution();
    boolean result1 = validAnagram.isAnagram("anagram", "nagaram");
    boolean result2 = validAnagram.isAnagram2("age", "ape");
    LOGGER.info("Result 1: " + result1);
    LOGGER.info("Result 2: " + result2);
  }
}
