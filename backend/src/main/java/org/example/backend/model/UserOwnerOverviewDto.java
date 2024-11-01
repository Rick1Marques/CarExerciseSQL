package org.example.backend.model;

public record UserOwnerOverviewDto(
        String firstName,
        String lastName,
        String profileImageUrl
) {
}