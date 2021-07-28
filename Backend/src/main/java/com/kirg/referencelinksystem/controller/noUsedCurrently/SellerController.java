package com.kirg.referencelinksystem.controller.noUsedCurrently;
/*
import com.kirg.referencelinksystem.entity.notUsedCurrently.Seller;
import com.kirg.referencelinksystem.service.ReferenceLinkService;
import com.kirg.referencelinksystem.service.notCurrentlyUsed.SellerService;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/seller")
public class SellerController {

    private SellerService sellerService;


    public SellerController(SellerService sellerService) {
        this.sellerService = sellerService;

    }

    @GetMapping
    public List<Seller> findAllSellers() {
        return sellerService.findAllSellers();
    }

    @PostMapping
    public Seller saveSeller(@Valid @RequestBody Seller seller) {
        return sellerService.saveSeller(seller);
    }

    @GetMapping("/{id}")
    public Optional<Seller> findSellerById(@PathVariable Long id) {
        return sellerService.findSellerById(id);
    }

    @DeleteMapping("/{id}")
    public void deleteSellerById(@PathVariable Long id) {
        sellerService.deleteSellerById(id);
    }

}
*/