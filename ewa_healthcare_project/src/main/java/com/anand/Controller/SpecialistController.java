package com.anand.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.logging.Logger;

@Controller
public class SpecialistController {

//    private Logger logger = Logger.getLogger(String.valueOf(SpecialistController.class));

    @GetMapping("/hello")
    @ResponseBody
    public String hello () {
        String hello = "Hello The Rest Controller is working";

//        logger.info(hello);
        return hello;
    }
}