package org.example.backend.entites;

import jakarta.persistence.*;

import java.math.BigDecimal;

@Entity
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
    private int numberOfPreviousOfOwners;

    @Column(nullable = false)
    private String color;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    public Long getId() {
        return id;
    }

    public Car setId(Long id) {
        this.id = id;
        return this;
    }

    public String getCategory() {
        return category;
    }

    public Car setCategory(String category) {
        this.category = category;
        return this;
    }

    public String getBrand() {
        return brand;
    }

    public Car setBrand(String brand) {
        this.brand = brand;
        return this;
    }

    public String getModel() {
        return model;
    }

    public Car setModel(String model) {
        this.model = model;
        return this;
    }

    public String getYear() {
        return year;
    }

    public Car setYear(String year) {
        this.year = year;
        return this;
    }

    public String getMileage() {
        return mileage;
    }

    public Car setMileage(String mileage) {
        this.mileage = mileage;
        return this;
    }

    public String getTransmission() {
        return transmission;
    }

    public Car setTransmission(String transmission) {
        this.transmission = transmission;
        return this;
    }

    public String getPower() {
        return power;
    }

    public Car setPower(String power) {
        this.power = power;
        return this;
    }

    public String getFuelType() {
        return fuelType;
    }

    public Car setFuelType(String fuelType) {
        this.fuelType = fuelType;
        return this;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public Car setPrice(BigDecimal price) {
        this.price = price;
        return this;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public Car setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
        return this;
    }

    public String getDescription() {
        return description;
    }

    public Car setDescription(String description) {
        this.description = description;
        return this;
    }

    public String getFuelConsumption() {
        return fuelConsumption;
    }

    public Car setFuelConsumption(String fuelConsumption) {
        this.fuelConsumption = fuelConsumption;
        return this;
    }

    public String getNumberOfDoors() {
        return numberOfDoors;
    }

    public Car setNumberOfDoors(String numberOfDoors) {
        this.numberOfDoors = numberOfDoors;
        return this;
    }

    public String getNumberOfSeats() {
        return numberOfSeats;
    }

    public Car setNumberOfSeats(String numberOfSeats) {
        this.numberOfSeats = numberOfSeats;
        return this;
    }

    public String getAirBags() {
        return airBags;
    }

    public Car setAirBags(String airBags) {
        this.airBags = airBags;
        return this;
    }

    public int getNumberOfPreviousOfOwners() {
        return numberOfPreviousOfOwners;
    }

    public Car setNumberOfPreviousOfOwners(int numberOfPreviousOfOwners) {
        this.numberOfPreviousOfOwners = numberOfPreviousOfOwners;
        return this;
    }

    public String getColor() {
        return color;
    }

    public Car setColor(String color) {
        this.color = color;
        return this;
    }

    public User getUser() {
        return user;
    }

    public Car setUser(User user) {
        this.user = user;
        return this;
    }
}