package org.example.backend.service;

import lombok.RequiredArgsConstructor;
import org.example.backend.entites.Car;
import org.example.backend.model.CarCardDto;
import org.example.backend.model.CarDetailsDto;
import org.example.backend.model.UserOwnerOverviewDto;
import org.example.backend.repositories.CarRepo;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CarService {

    private final CarRepo carRepo;

    public List<CarCardDto> findAllCars() {
        return carRepo.findAll().stream()
                .map(car -> new CarCardDto(
                        car.getId().toString(),
                        car.getBrand(),
                        car.getModel(),
                        car.getYear(),
                        car.getMileage(),
                        car.getTransmission(),
                        car.getPower(),
                        car.getFuelType(),
                        car.getPrice().toString(),
                        car.getImageUrl()
                ))
                .collect(Collectors.toList());
    }

    public CarDetailsDto findCarDetailsById(String id) {
        return carRepo.findById(Long.parseLong(id))
                .map(car -> new CarDetailsDto(
                        car.getId().toString(),
                        car.getCategory(),
                        car.getBrand(),
                        car.getModel(),
                        car.getYear(),
                        car.getMileage(),
                        car.getTransmission(),
                        car.getPower(),
                        car.getFuelType(),
                        car.getPrice().toString(),
                        car.getImageUrl(),
                        car.getDescription(),
                        car.getFuelConsumption(),
                        car.getNumberOfDoors(),
                        car.getNumberOfSeats(),
                        car.getAirBags(),
                        car.getNumberOfPreviousOfOwners(),
                        car.getColor(),
                        new UserOwnerOverviewDto(
                                car.getUser().getUsername(),
                                car.getUser().getProfileImageUrl()
                        )
                ))
                .orElseThrow(() -> new RuntimeException("Car not found"));
    }

    public CarCardDto findCarCardById(String id) {
        return carRepo.findById(Long.parseLong(id))
                .map(car -> new CarCardDto(
                        car.getId().toString(),
                        car.getBrand(),
                        car.getModel(),
                        car.getYear(),
                        car.getMileage(),
                        car.getTransmission(),
                        car.getPower(),
                        car.getFuelType(),
                        car.getPrice().toString(),
                        car.getImageUrl()
                ))
                .orElseThrow(() -> new RuntimeException("Car not found"));
    }
}