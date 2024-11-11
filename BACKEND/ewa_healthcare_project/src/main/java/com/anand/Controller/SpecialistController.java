package com.anand.Controller;

import com.anand.Entity.User;
import com.anand.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
public class SpecialistController {

    @Autowired
    UserRepository userRepository;

    @GetMapping("/")
    public String hello () {
        return "I wish this works";
    }

    @GetMapping("/json")
    public String json() {
        return "{\"message\": \"Hello from JSON endpoint\"}";
    }

    @GetMapping("/test")
    public String test () {
        return "test";
    }

    @GetMapping ("/allUsers")
    public List<User> getUsers () {
        return userRepository.findAll();
    }
}