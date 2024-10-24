package org.example.backend.controller;

import lombok.RequiredArgsConstructor;
import org.example.backend.model.CarCardDto;
import org.example.backend.model.CarDetailsDto;
import org.example.backend.service.CarService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/cars")
@RequiredArgsConstructor
public class CarController {

    private final CarService carService;

    @GetMapping
    public List<CarCardDto> getAllCars(){
        return carService.findAllCars();
    }

    @GetMapping("/details/{id}")
    public CarDetailsDto getCarDetails(@PathVariable String id){
        return carService.findCarDetailsById(id);
    }

    @GetMapping("/card/{id}")
    public CarCardDto getCarCard(@PathVariable String id){
        return carService.findCarCardById(id);
    }

}