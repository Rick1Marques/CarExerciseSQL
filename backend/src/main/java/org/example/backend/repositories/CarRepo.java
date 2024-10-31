package org.example.backend.repositories;

import org.example.backend.entites.Car;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CarRepo extends JpaRepository<Car, Long> {
}
