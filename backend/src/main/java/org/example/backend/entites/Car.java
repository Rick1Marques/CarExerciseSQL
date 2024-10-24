package org.example.backend.entites;

import jakarta.persistence.*;
import lombok.Data;

import java.math.BigDecimal;

@Entity
@Data
public class Car {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String category;

    @Column(nullable = false)
    private String brand;

    @Column(nullable = false)
    private String model;

    @Column(nullable = false)
    private String year;

    @Column(nullable = false)
    private String mileage;

    @Column(nullable = false)
    private String transmission;

    @Column(nullable = false)
    private String power;

    @Column(nullable = false)
    private String fuelType;

    @Column(nullable = false)
    private BigDecimal price;

    @Column(nullable = false)
    private String imageUrl;

    @Column(nullable = false)
    private String description;

    @Column(nullable = false)
    private String fuelConsumption;

    @Column(nullable = false)
    private String numberOfDoors;

    @Column(nullable = false)
    private String numberOfSeats;

    @Column(nullable = false)
    private String airBags;

    @Column(nullable = false)
    private String numberOfPreviousOfOwners;

    @Column(nullable = false)
    private String color;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

}