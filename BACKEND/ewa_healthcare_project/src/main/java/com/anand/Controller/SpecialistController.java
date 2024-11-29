package com.anand.Controller;

import com.anand.Entity.Specialist;
import com.anand.repository.SpecialistRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class SpecialistController {

    @Autowired
    SpecialistRepository specialistRepository;

    @GetMapping("/getSpecialists")
    public List<Specialist> getAllCustomers() {
        return specialistRepository.findAllSpecialists();
    }

    @GetMapping("/getSpecialists/{id}")
    public Specialist getSpecialistById(@PathVariable int id) {
        System.out.println("Fetching Specialist with ID: " + id);
        return specialistRepository.findSpecialistById(id);
    }

    @PostMapping("/postSP")
    public void saveCustomer(@RequestBody Specialist specialist) {
        specialistRepository.saveSpecialist(specialist);
    }

    @PostMapping("/addAccountsSP")
    public ResponseEntity<Specialist> addCustomer (@RequestBody Specialist specialist) {
        try {
            specialist.setCreatedAt(LocalDateTime.now());
            specialistRepository.saveSpecialist(specialist);

            return new ResponseEntity<>(specialist, HttpStatus.CREATED);
        } catch (Exception e) {
            return null;
        }
    }

    @DeleteMapping("/deleteSP/{id}")
    public void deleteCustomer(@PathVariable int id) {
        specialistRepository.deleteSpecialist(id);
    }
}