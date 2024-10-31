package org.example.backend.controller;

import lombok.RequiredArgsConstructor;
import org.example.backend.entites.Car;
import org.example.backend.model.CarCardDto;
import org.example.backend.model.CarDetailsDto;
import org.example.backend.model.NewCarInputsDto;
import org.example.backend.service.CarService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cars")
@RequiredArgsConstructor
public class CarController {

    private final CarService carService;

    @GetMapping
    public List<CarCardDto> getAllCars() {
        return carService.findAllCars();
    }

    @GetMapping("/{id}")
    public CarDetailsDto getCarDetails(@PathVariable String id) {
        return carService.findCarDetailsById(id);
    }

    @PostMapping
    public Car postCarDetails(@RequestBody NewCarInputsDto newCarInputs) {
        return carService.addCar(newCarInputs);
    }

    @DeleteMapping("/{id}")
    public String deleteCar(@PathVariable String id) {
        return carService.deleteCar(id);
    }

    @PutMapping("/{id}")
    public Car putCar(@PathVariable String id, @RequestBody NewCarInputsDto newCarInputs) {
        return carService.updateCar(id, newCarInputs);
    }
}
