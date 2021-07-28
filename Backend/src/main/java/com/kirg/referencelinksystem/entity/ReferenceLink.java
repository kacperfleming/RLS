package com.kirg.referencelinksystem.entity;

import com.kirg.referencelinksystem.entity.notUsedCurrently.Brand;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

@Entity
public class ReferenceLink {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @NotNull
    @NotEmpty(message = "The link name must not be null.")
    private String name;

    @NotNull
    @NotEmpty(message = "The url must not be null.")
    private String url;



    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }


}
