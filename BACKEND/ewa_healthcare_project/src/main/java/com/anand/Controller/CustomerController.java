package com.anand.Controller;

import com.anand.Entity.Customer;
import com.anand.repository.CustomerRepository;
import com.anand.repository.CustomerRepositoryImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

//    @GetMapping("/{id}")
//    public Customer getCustomerById(@PathVariable int id) {
//        return customerRepository.findCustomerById(id);
//    }

//    @PostMapping("/post")
//    public void saveCustomer(@RequestBody Customer customer) {
//        customerRepository.saveCustomer(customer);
//    }
//
//    @DeleteMapping("/delete/{id}")
//    public void deleteCustomer(@PathVariable int id) {
//        customerRepository.deleteCustomer(id);
//    }
}