package org.example.backend.controller;

import lombok.RequiredArgsConstructor;
import org.example.backend.entites.User;
import org.example.backend.model.UserCardDto;
import org.example.backend.model.UserOwnerOverviewDto;
import org.example.backend.service.AppUserService;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
public class AppUserController {

    private final AppUserService appUserService;

    @GetMapping
    public Set<UserCardDto> getAllUsers(){
        return appUserService.findAllUsers();
    }

    @PostMapping
    public User postUser(@RequestBody UserOwnerOverviewDto newUser){
        return appUserService.addUser(newUser);
    }
}