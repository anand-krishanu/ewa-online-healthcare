package com.anand.repository;

import com.anand.Entity.Specialist;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public class SpecialistRepositoryImp implements SpecialistRepository {

    @PersistenceContext
    private EntityManager entityManager;

    // Find all specialists
    @Override
    public List<Specialist> findAllSpecialists() {
        String hql = "FROM Specialist";  // HQL or JPQL query to fetch all specialists
        List<Specialist> specialists = entityManager.createQuery(hql, Specialist.class).getResultList();
        System.out.println("Fetched Specialists: " + specialists.size());
        return specialists;
    }

    // Get specialist by ID
    @Override
    public Specialist findSpecialistById(int specialistId) {
        return entityManager.find(Specialist.class, specialistId);
    }

    // Insert or update specialist
    @Override
    @Transactional
    public void saveSpecialist(Specialist specialist) {
        if (specialist.getSpecialistId() == 0) {
            // If specialist has no ID, it's a new entry, persist it
            entityManager.persist(specialist);
        } else {
            // If specialist has an ID, update the existing entry
            entityManager.merge(specialist);
        }
    }

    // Delete specialist by ID
    @Override
    @Transactional
    public void deleteSpecialist(int specialistId) {
        Specialist specialist = findSpecialistById(specialistId);
        if (specialist != null) {
            // If specialist exists, remove it
            entityManager.remove(specialist);
        }
    }
}
