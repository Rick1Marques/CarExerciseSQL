package org.example.backend.model;

import java.util.List;

public record UserCardDto(
        String id,
        String username,
        String profileImageUrl,
        List<CarInfosUserListCardDto> usersCars
) {
}
