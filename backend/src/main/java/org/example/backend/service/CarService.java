package org.example.backend.service;

import lombok.RequiredArgsConstructor;
import org.example.backend.entites.Car;
import org.example.backend.entites.User;
import org.example.backend.model.CarCardDto;
import org.example.backend.model.CarDetailsDto;
import org.example.backend.model.NewCarInputsDto;
import org.example.backend.model.UserOwnerOverviewDto;
import org.example.backend.repositories.CarRepo;
import org.example.backend.repositories.UserRepo;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CarService {

    private final CarRepo carRepo;
    private final UserRepo userRepo;

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
                        String.valueOf(car.getNumberOfPreviousOfOwners()),
                        car.getColor(),
                        new UserOwnerOverviewDto(
                                car.getUser().getUsername(),
                                car.getUser().getProfileImageUrl()
                        )
                ))
                .orElseThrow(() -> new RuntimeException("Car not found"));
    }


    public Car addCar(NewCarInputsDto newCarInputs) {
        User user = userRepo.findById(Long.parseLong(newCarInputs.ownerId()))
                .orElseThrow(() -> new RuntimeException("User not found"));

        return carRepo.save(new Car()
                .setCategory(newCarInputs.category())
                .setBrand(newCarInputs.brand())
                .setModel(newCarInputs.model())
                .setYear(newCarInputs.year())
                .setMileage(newCarInputs.mileage())
                .setTransmission(newCarInputs.transmission())
                .setPower(newCarInputs.power())
                .setFuelType(newCarInputs.fuelType())
                .setPrice(new BigDecimal(newCarInputs.price()))
                .setImageUrl(newCarInputs.imageUrl())
                .setDescription(newCarInputs.description())
                .setFuelConsumption(newCarInputs.fuelConsumption())
                .setNumberOfDoors(newCarInputs.numberOfDoors())
                .setNumberOfSeats(newCarInputs.numberOfSeats())
                .setAirBags(newCarInputs.airBags())
                .setNumberOfPreviousOfOwners(Integer.parseInt(newCarInputs.numberOfPreviousOfOwners()))
                .setColor(newCarInputs.color())
                .setUser(user)
        );
    }

    public String deleteCar(String id) {
        carRepo.deleteById(Long.parseLong(id));
        return id;
    }

    public Car updateCar(String id, NewCarInputsDto newCarInputs) {
        User user = userRepo.findById(Long.parseLong(newCarInputs.ownerId()))
                .orElseThrow(() -> new RuntimeException("User not found"));

        Car car = carRepo.findById(Long.parseLong(id))
                .orElseThrow(() -> new RuntimeException("Car not found"));

        car
                .setCategory(newCarInputs.category())
                .setBrand(newCarInputs.brand())
                .setModel(newCarInputs.model())
                .setYear(newCarInputs.year())
                .setMileage(newCarInputs.mileage())
                .setTransmission(newCarInputs.transmission())
                .setPower(newCarInputs.power())
                .setFuelType(newCarInputs.fuelType())
                .setPrice(new BigDecimal(newCarInputs.price()))
                .setImageUrl(newCarInputs.imageUrl())
                .setDescription(newCarInputs.description())
                .setFuelConsumption(newCarInputs.fuelConsumption())
                .setNumberOfDoors(newCarInputs.numberOfDoors())
                .setNumberOfSeats(newCarInputs.numberOfSeats())
                .setAirBags(newCarInputs.airBags())
                .setNumberOfPreviousOfOwners(Integer.parseInt(newCarInputs.numberOfPreviousOfOwners()))
                .setColor(newCarInputs.color())
                .setUser(user);

        return carRepo.save(car);
    }
}