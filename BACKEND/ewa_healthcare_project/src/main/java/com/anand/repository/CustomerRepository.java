package com.anand.repository;

import com.anand.Entity.Customer;

import java.util.List;

public interface CustomerRepository {
    List<Customer> findAllCustomers();
    Customer findCustomerById(int customerId);
    void saveCustomer(Customer customer);
    void deleteCustomer(int customerId);
}
