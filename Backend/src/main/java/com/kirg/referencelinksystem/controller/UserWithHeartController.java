package com.kirg.referencelinksystem.controller;

import com.kirg.referencelinksystem.entity.UserWithHeart;
import com.kirg.referencelinksystem.service.UserWithHeartService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequestMapping("/userwithheart")
public class UserWithHeartController {
    private UserWithHeartService userWithHeartService;

    public UserWithHeartController(UserWithHeartService userWithHeartService) {
        this.userWithHeartService = userWithHeartService;
    }

    @PostMapping
    public UserWithHeart addUserWithHeart(@Valid @RequestBody UserWithHeart userWithHeart) {
        return userWithHeartService.addUserWithHeart(userWithHeart);
    }


}
