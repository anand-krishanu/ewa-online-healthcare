package com.anand.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class SpecialistController {

    @GetMapping("/")
    public String hello () {
        return "I wish this works";
    }

    @GetMapping("/json")  // Make sure /json endpoint is mapped
    public String json() {
        return "{\"message\": \"Hello from JSON endpoint\"}";
    }
}