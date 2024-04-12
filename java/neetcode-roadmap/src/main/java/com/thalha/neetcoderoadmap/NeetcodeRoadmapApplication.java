package com.thalha.neetcoderoadmap;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.thalha.neetcoderoadmap.arrayAndHashing.ContainsDuplicate;

@SpringBootApplication
public class NeetcodeRoadmapApplication {

  public static void main(String[] args) {
    SpringApplication.run(NeetcodeRoadmapApplication.class, args);
    ContainsDuplicate containsDuplicate = new ContainsDuplicate();
    containsDuplicate.run();
  }

}
