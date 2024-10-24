package org.example.backend.model;

public record CarInfosUserListCardDto(
        String id,
        String brand,
        String model,
        String year,
        String fuelType
) {
}