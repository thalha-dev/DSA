package com.thalha.neetcoderoadmap;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.thalha.neetcoderoadmap.arrayAndHashing.TwoSum;

@SpringBootApplication
public class NeetcodeRoadmapApplication {

  public static void main(String[] args) {
    SpringApplication.run(NeetcodeRoadmapApplication.class, args);
    TwoSum twoSum = new TwoSum();
    twoSum.run();
  }

}
