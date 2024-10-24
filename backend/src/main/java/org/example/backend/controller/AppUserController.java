package org.example.backend.controller;

import lombok.RequiredArgsConstructor;
import org.example.backend.model.UserCardDto;
import org.example.backend.service.AppUserService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
}
