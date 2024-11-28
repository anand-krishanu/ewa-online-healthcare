package com.anand.Controller;

import com.anand.Entity.Customer;
import com.anand.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;


@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class CustomerController {

    @Autowired
    CustomerRepository customerRepository;

    @GetMapping("/")
    public String hello () {
        return "Hello World";
    }

    @GetMapping("/test")
    public String test () {
        return "test";
    }

    @GetMapping("/getUsers")
    public List<Customer> getAllCustomers() {
        return customerRepository.findAllCustomers();
    }

    @GetMapping("/getUsers/{id}")
    public Customer getCustomerById(@PathVariable int id) {
        System.out.println("Fetching customer with ID: " + id);
        return customerRepository.findCustomerById(id);
    }

    @PostMapping("/post")
    public void saveCustomer(@RequestBody Customer customer) {
        customerRepository.saveCustomer(customer);
    }

    @PostMapping("/addAccounts")
    public ResponseEntity<Customer> addCustomer (@RequestBody Customer customer) {
        try {
            customer.setCreatedAt(LocalDateTime.now());
            customerRepository.saveCustomer(customer);

            return new ResponseEntity<>(customer, HttpStatus.CREATED);
        } catch (Exception e) {
            return null;
        }
    }

    @DeleteMapping("/delete/{id}")
    public void deleteCustomer(@PathVariable int id) {
        customerRepository.deleteCustomer(id);
    }
}