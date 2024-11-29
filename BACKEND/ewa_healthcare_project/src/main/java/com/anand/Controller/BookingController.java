package com.anand.Controller;

import com.anand.Entity.Booking;
import com.anand.repository.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/bookings")
public class BookingController {

    private final BookingRepository bookingRepository;

    @Autowired
    public BookingController(BookingRepository bookingRepository) {
        this.bookingRepository = bookingRepository;
    }

    @PostMapping("/add")
    public String addBooking(@RequestBody Booking booking) {
        bookingRepository.saveBooking(booking);
        return "Booking added successfully!";
    }

    @GetMapping("/customer/{customerId}")
    public List<Booking> getBookingsByCustomer(@PathVariable int customerId) {
        return bookingRepository.getBookingsByCustomerId(customerId);
    }

    @GetMapping("/specialist/{specialistName}")
    public List<Booking> getBookingsBySpecialist(@PathVariable String specialistName) {
        return bookingRepository.getBookingsBySpecialistName(specialistName);
    }
}
