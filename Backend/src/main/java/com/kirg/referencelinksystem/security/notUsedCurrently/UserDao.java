package com.kirg.referencelinksystem.security.notUsedCurrently;

import java.util.Optional;

public interface UserDao {

    Optional<User> selectUserByName(String username);

}