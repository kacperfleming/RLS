package com.kirg.referencelinksystem.controller;

import com.kirg.referencelinksystem.entity.Product;
import com.kirg.referencelinksystem.service.ProductService;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/product")
public class ProductController {

    private ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping
    public List<Product> findAllProducts() {
        return productService.findAllProducts();
    }

    @PostMapping
    public Product saveProduct(@Valid @RequestBody Product product) {
        return productService.saveProduct(product);
    }

    @GetMapping("/{id}")
    public Optional<Product> findProductById(@PathVariable Long id) {
        return productService.findProductById(id);
    }

    @DeleteMapping("/{id}")
    public void deleteProductById(@PathVariable Long id) {
        productService.deleteProductById(id);
    }
}
