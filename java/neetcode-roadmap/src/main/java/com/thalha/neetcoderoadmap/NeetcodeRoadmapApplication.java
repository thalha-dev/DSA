package com.thalha.neetcoderoadmap;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.thalha.neetcoderoadmap.arrayAndHashing.GroupAnagrams;

@SpringBootApplication
public class NeetcodeRoadmapApplication {

  public static void main(String[] args) {
    SpringApplication.run(NeetcodeRoadmapApplication.class, args);
    GroupAnagrams groupAnagrams = new GroupAnagrams();
    groupAnagrams.run();
  }

}
