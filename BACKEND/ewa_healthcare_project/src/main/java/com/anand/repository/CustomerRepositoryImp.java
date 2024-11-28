package com.anand.repository;

import com.anand.Entity.Customer;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public class CustomerRepositoryImp implements CustomerRepository {
    @PersistenceContext
    private EntityManager entityManager;

    @Override
    public List<Customer> findAllCustomers() {
        String hql = "FROM Customer";
        List<Customer> customer =  entityManager.createQuery(hql, Customer.class).getResultList();
        System.out.println("Fetched Customers: " + customer.size());
        return customer;
    }

    //Get customer by ID
    @Override
    public Customer findCustomerById(int customerId) {
        return entityManager.find(Customer.class, customerId);
    }

    //Insert or update customer
    @Override
    @Transactional
    public void saveCustomer(Customer customer) {
        if (customer.getCustomerId() == 0) {
            entityManager.persist(customer);
        } else {
            entityManager.merge(customer);
        }
    }

    // Delete customer by ID
    @Override
    @Transactional
    public void deleteCustomer(int customerId) {
        Customer customer = findCustomerById(customerId);
        if (customer != null) {
            entityManager.remove(customer);
        }
    }
}
