package com.kirg.referencelinksystem.entity;

import com.kirg.referencelinksystem.enums.offerEnums.*;
import com.kirg.referencelinksystem.enums.userEnums.LifeQuality;
import com.kirg.referencelinksystem.enums.userEnums.UserSituation;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.math.BigDecimal;
import java.util.List;

@Entity
public class UserWithHeart {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @NotEmpty
    private String phoneNum;

    @NotEmpty
    private String email;

    private UserSituation userSituation;

    private LifeQuality lifeQuality;

    @OneToMany
    private List<ReferenceLink> referenceLinkList;

    @NotEmpty
    private String birthDate;

    @NotEmpty
    @OneToOne
    private Address address;

    @OneToOne
    private Offer whatDoIOffer;

    private int heartPoints=0;


    public int getHeartPoints() {
        return heartPoints;
    }

    public void setHeartPoints(int heartPoints) {
        this.heartPoints = heartPoints;
    }

    public String getPhoneNum() {
        return phoneNum;
    }

    public void setPhoneNum(String phoneNum) {
        this.phoneNum = phoneNum;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public UserSituation getUserSituation() {
        return userSituation;
    }

    public void setUserSituation(UserSituation userSituation) {
        this.userSituation = userSituation;
    }

    public LifeQuality getLifeQuality() {
        return lifeQuality;
    }

    public void setLifeQuality(LifeQuality lifeQuality) {
        this.lifeQuality = lifeQuality;
    }

    public List<ReferenceLink> getReferenceLinkList() {
        return referenceLinkList;
    }

    public void setReferenceLinkList(List<ReferenceLink> referenceLinkList) {
        this.referenceLinkList = referenceLinkList;
    }

    public String getBirthDate() {
        return birthDate;
    }

    public void setBirthDate(String birthDate) {
        this.birthDate = birthDate;
    }

    public Address getAddress() {
        return address;
    }

    public void setAddress(Address address) {
        this.address = address;
    }

    public Offer getWhatDoIOffer() {
        return whatDoIOffer;
    }

    public void setWhatDoIOffer(Offer whatDoIOffer) {
        this.whatDoIOffer = whatDoIOffer;
    }
}
