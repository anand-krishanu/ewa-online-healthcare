package com.anand.repository;

import com.anand.Entity.Booking;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@Transactional
public class BookingRepositoryImp implements BookingRepository {

    @PersistenceContext
    private EntityManager entityManager;

    @Override
    public void saveBooking(Booking booking) {
        entityManager.persist(booking);
    }

    @Override
    public List<Booking> getBookingsByCustomerId(int customerId) {
        String query = "SELECT b FROM Booking b WHERE b.customerId = :customerId";
        return entityManager.createQuery(query, Booking.class)
                .setParameter("customerId", customerId)
                .getResultList();
    }

    @Override
    public List<Booking> getBookingsBySpecialistName(String specialistName) {
        String query = "SELECT b FROM Booking b WHERE b.specialistName = :specialistName";
        return entityManager.createQuery(query, Booking.class)
                .setParameter("specialistName", specialistName)
                .getResultList();
    }
}
