package com.anand.repository;

import com.anand.Entity.Specialist;

import java.util.List;

public interface SpecialistRepository {

    List<Specialist> findAllSpecialists();
    Specialist findSpecialistById(int customerId);
    void saveSpecialist(Specialist customer);
    void deleteSpecialist(int specialistId);
}
