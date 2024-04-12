package com.thalha.neetcoderoadmap.arrayAndHashing;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class GroupAnagrams {
  public static final Logger LOGGER = LoggerFactory.getLogger(GroupAnagrams.class);

  private class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
      Map<String, List<String>> result = new HashMap<>();
      for (String str : strs) {

        int[] count = new int[26];

        for (char ch : str.toCharArray()) {
          count[ch - 'a']++;
        }

        StringBuilder sb = new StringBuilder();

        for (int i = 0; i < 26; i++) {
          sb.append("#");
          sb.append(count[i]);
        }

        String hash = sb.toString();

        if (!result.containsKey(hash)) {
          result.put(hash, new ArrayList<String>());
        }

        result.get(hash).add(str);
      }
      return new ArrayList<>(result.values());
    }
  }

  public void run() {
    Solution sol = new Solution();
    List<List<String>> output = sol.groupAnagrams(new String[] { "ape", "ate", "eat", "ant", "tan" });
    LOGGER.info("Output: " + output);
  }
}
