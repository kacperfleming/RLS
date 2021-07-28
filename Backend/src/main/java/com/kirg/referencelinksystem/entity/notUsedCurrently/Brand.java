package com.kirg.referencelinksystem.entity.notUsedCurrently;

import com.kirg.referencelinksystem.entity.Product;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.util.List;

@Entity
public class Brand {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @NotNull
    @NotEmpty(message = "The brand name must not be null.")
    private String name;

    @OneToMany
    private List<Product> productsOffered;

    public Long getId() {
        return id;
    }



    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Product> getProductsOffered() {
        return productsOffered;
    }

    public void setProductsOffered(List<Product> productsOffered) {
        this.productsOffered = productsOffered;
    }
}
