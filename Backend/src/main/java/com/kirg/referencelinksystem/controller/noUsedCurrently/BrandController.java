package com.kirg.referencelinksystem.controller.noUsedCurrently;
/*
import com.kirg.referencelinksystem.entity.notUsedCurrently.Brand;
import com.kirg.referencelinksystem.entity.Product;
import com.kirg.referencelinksystem.service.notCurrentlyUsed.BrandService;
import com.kirg.referencelinksystem.service.ProductService;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/brand")
public class BrandController {


    private BrandService brandService;


    public BrandController(BrandService brandService) {
        this.brandService = brandService;
    }

    @GetMapping
    public List<Brand> findAllBrands() {
        return brandService.findAllBrands();
    }

    @PostMapping
    public Brand saveBrand(@Valid @RequestBody Brand brand) {
        return brandService.saveBrand(brand);
    }

    @GetMapping("/{id}")
    public Optional<Brand> findBrandById(@PathVariable Long id) {
        return brandService.findBrandById(id);
    }

    @DeleteMapping("/{id}")
    public void deleteBrandById(@PathVariable Long id) {
        brandService.deleteBrandById(id);
    }



}
*/