package org.example.backend.model;

public record CarDetailsDto(
        String id,
        String category,
        String brand,
        String model,
        String year,
        String mileage,
        String transmission,
        String power,
        String fuelType,
        String price,
        String imageUrl,
        String description,
        String fuelConsumption,
        String numberOfDoors,
        String numberOfSeats,
        String airBags,
        String numberOfPreviousOfOwners,
        String color,
        UserOwnerOverviewDto owner
) {
}