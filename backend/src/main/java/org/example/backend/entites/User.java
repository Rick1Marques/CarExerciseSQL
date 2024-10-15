package org.example.backend.entites;

import jakarta.persistence.*;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "`user`")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String fistName;

    @Column(nullable = false)
    private String lastName;

    @OneToMany(mappedBy = "user")
    private Set<Car> cars = new HashSet<>();

    public Long getId() {
        return id;
    }

    public User setId(Long id) {
        this.id = id;
        return this;
    }

    public String getFistName() {
        return fistName;
    }

    public User setFistName(String fistName) {
        this.fistName = fistName;
        return this;
    }

    public String getLastName() {
        return lastName;
    }

    public User setLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }

    public Set<Car> getCars() {
        return cars;
    }

    public User setCars(Set<Car> cars) {
        this.cars = cars;
        return this;
    }
}
