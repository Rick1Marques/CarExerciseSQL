package org.example.backend.model;

public record CarCardDto(
        String id,
        String brand,
        String model,
        String year,
        String mileage,
        String transmission,
        String power,
        String fuelType,
        String price,
        String imageUrl
) {
}