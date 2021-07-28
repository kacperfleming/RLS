package com.kirg.referencelinksystem.entity.notUsedCurrently;

import com.kirg.referencelinksystem.entity.ReferenceLink;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import java.util.List;

@Entity
public class Seller {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @NotEmpty
    private String name;

    @OneToMany
    private List<Brand> companies;

    @OneToMany
    private List<ReferenceLink> referenceLinks;

    public Long getId() {
        return id;
    }

    public List<Brand> getCompanies() {
        return companies;
    }

    public void setCompanies(List<Brand> companies) {
        this.companies = companies;
    }

    public List<ReferenceLink> getReferenceLinks() {
        return referenceLinks;
    }

    public void setReferenceLinks(List<ReferenceLink> referenceLinks) {
        this.referenceLinks = referenceLinks;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
