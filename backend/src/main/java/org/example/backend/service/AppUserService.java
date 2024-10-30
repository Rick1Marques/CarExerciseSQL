package org.example.backend.service;

import lombok.RequiredArgsConstructor;
import org.example.backend.entites.User;
import org.example.backend.model.CarInfosUserListCardDto;
import org.example.backend.model.UserCardDto;
import org.example.backend.model.UserOwnerOverviewDto;
import org.example.backend.repositories.UserRepo;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.Set;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class AppUserService {

    private final UserRepo userRepo;

    public Set<UserCardDto> findAllUsers() {
        return userRepo.findAll().stream()
                .map(user -> new UserCardDto(
                        user.getId().toString(),
                        user.getUsername(),
                        user.getProfileImageUrl(),
                        user.getCars().stream()
                                .map(car -> new CarInfosUserListCardDto(
                                        car.getId().toString(),
                                        car.getBrand(),
                                        car.getModel(),
                                        car.getYear(),
                                        car.getFuelType()
                                ))
                                .toList()
                ))
                .collect(Collectors.toSet());
    }

    public User addUser(UserOwnerOverviewDto newUser) {
        User user = new User()
                .setUsername(newUser.username())
                .setProfileImageUrl(newUser.profileImageUrl())
                .setCredits(new BigDecimal(0))
                .setCars(Set.of());
        return userRepo.save(user);
    }
}
