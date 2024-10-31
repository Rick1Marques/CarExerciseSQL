package org.example.backend.repositories;

import org.example.backend.entites.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo  extends JpaRepository<User, Long> {
}
