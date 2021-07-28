package com.kirg.referencelinksystem.security;


import com.kirg.referencelinksystem.entity.UserWithHeart;

import javax.persistence.*;

@Entity
public class ApplicationUser {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String userName;

    private String password;

    private boolean active;

   private String roles;

   @OneToOne
   private UserWithHeart userWithHeart;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public boolean isActive() {
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }

    public String getRoles() {
        return roles;
    }

    public void setRoles(String roles) {
        this.roles = roles;
    }

    public UserWithHeart getUserWithHeart() {
        return userWithHeart;
    }

    public void setUserWithHeart(UserWithHeart userWithHeart) {
        this.userWithHeart = userWithHeart;
    }
}
