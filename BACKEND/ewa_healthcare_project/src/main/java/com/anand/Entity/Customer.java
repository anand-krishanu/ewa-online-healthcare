package com.anand.Entity;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "Customer")
public class Customer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "customer_id")  // Specify the exact column name in the DB
    private int customerId;

    @Column(name = "first_name")  // Ensure this matches the DB column name
    private String firstName;

    @Column(name = "last_name")  // Ensure this matches the DB column name
    private String lastName;

    @Column(name = "email")  // Ensure this matches the DB column name
    private String email;

    @Column(name = "phone_number")  // Ensure this matches the DB column name
    private String phoneNumber;

    @Column(name = "password_hash")  // Ensure this matches the DB column name
    private String passwordHash;

    @Column(name = "address")  // Ensure this matches the DB column name
    private String address;

    @Column(name = "created_at")  // Ensure this matches the DB column name
    private LocalDateTime createdAt;

    public int getCustomerId() {
        return customerId;
    }

    public void setCustomerId(int customerId) {
        this.customerId = customerId;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getPasswordHash() {
        return passwordHash;
    }

    public void setPasswordHash(String passwordHash) {
        this.passwordHash = passwordHash;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }
}

