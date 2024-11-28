package com.anand.repository;

import com.anand.Entity.Booking;

import java.util.List;

public interface BookingRepository {
    void saveBooking(Booking booking);

    List<Booking> getBookingsByCustomerId(int customerId);

    List<Booking> getBookingsBySpecialistName(String specialistName); // Updated method signature
}
