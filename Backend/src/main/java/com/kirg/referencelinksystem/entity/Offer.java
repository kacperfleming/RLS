package com.kirg.referencelinksystem.entity;

import com.kirg.referencelinksystem.enums.offerEnums.*;


import javax.persistence.*;
import java.math.BigDecimal;
import java.util.List;

@Entity
public class Offer {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String name;

    private OfferrorGroup offerrorGroup;

    private long offerNum;

    private String offerDescription;

    private BigDecimal offerCost;

    private OptionNeedOffer optionNeedOffer;

    private OfferCategory offerCategory;

    private OfferArea offerArea;

    private OfferReason offerReason;

    private OfferPayment offerPayment;

    boolean isUrgent;

    @OneToMany
    private List<Product> productList;


    public Long getId() {
        return id;
    }


    public OfferrorGroup getOfferrorGroup() {
        return offerrorGroup;
    }

    public void setOfferrorGroup(OfferrorGroup offerrorGroup) {
        this.offerrorGroup = offerrorGroup;
    }

    public long getOfferNum() {
        return offerNum;
    }

    public void setOfferNum(long offerNum) {
        this.offerNum = offerNum;
    }

    public String getOfferDescription() {
        return offerDescription;
    }

    public void setOfferDescription(String offerDescription) {
        this.offerDescription = offerDescription;
    }

    public BigDecimal getOfferCost() {
        return offerCost;
    }

    public void setOfferCost(BigDecimal offerCost) {
        this.offerCost = offerCost;
    }

    public OptionNeedOffer getOptionNeedOffer() {
        return optionNeedOffer;
    }

    public void setOptionNeedOffer(OptionNeedOffer optionNeedOffer) {
        this.optionNeedOffer = optionNeedOffer;
    }

    public OfferCategory getOfferCategory() {
        return offerCategory;
    }

    public void setOfferCategory(OfferCategory offerCategory) {
        this.offerCategory = offerCategory;
    }

    public OfferArea getOfferArea() {
        return offerArea;
    }

    public void setOfferArea(OfferArea offerArea) {
        this.offerArea = offerArea;
    }

    public OfferReason getOfferReason() {
        return offerReason;
    }

    public void setOfferReason(OfferReason offerReason) {
        this.offerReason = offerReason;
    }

    public OfferPayment getOfferPayment() {
        return offerPayment;
    }

    public void setOfferPayment(OfferPayment offerPayment) {
        this.offerPayment = offerPayment;
    }

    public boolean isUrgent() {
        return isUrgent;
    }

    public void setUrgent(boolean urgent) {
        isUrgent = urgent;
    }

    public List<Product> getProductList() {
        return productList;
    }

    public void setProductList(List<Product> productList) {
        this.productList = productList;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
