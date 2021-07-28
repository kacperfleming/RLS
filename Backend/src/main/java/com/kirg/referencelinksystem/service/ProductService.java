package com.kirg.referencelinksystem.service;

import com.kirg.referencelinksystem.data.ProductRepository;
import com.kirg.referencelinksystem.entity.Product;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

    private ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public List<Product> findAllProducts() {
        return productRepository.findAll();
    }

    public Product saveProduct(Product product) {
        return productRepository.save(product);
    }

    public Optional<Product> findProductById(Long id) {
        return productRepository.findById(id);
    }

    public boolean existsProductById(Long id) {
        return productRepository.existsById(id);
    }

    public void deleteProductById(Long id) {
        productRepository.deleteById(id);
    }
}
