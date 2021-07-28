package com.kirg.referencelinksystem.service;

import com.kirg.referencelinksystem.data.UserWithHeartRepository;
import com.kirg.referencelinksystem.entity.UserWithHeart;
import org.springframework.stereotype.Service;

@Service
public class UserWithHeartService {
    private UserWithHeartRepository userWithHeartRepository;

    public UserWithHeartService(UserWithHeartRepository userWithHeartRepository) {
        this.userWithHeartRepository = userWithHeartRepository;
    }

    public UserWithHeart addUserWithHeart(UserWithHeart userWithHeart) {
        return userWithHeartRepository.save(userWithHeart);
    }
}
