package com.kirg.referencelinksystem.controller;

import com.kirg.referencelinksystem.entity.Address;
import com.kirg.referencelinksystem.service.AddressService;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Optional;

@RestController
@RequestMapping("/address")
public class AddressController {
    private AddressService addressService;

    public AddressController(AddressService addressService) {
        this.addressService = addressService;
    }

    @PostMapping
    public Address saveAddress(@Valid @RequestBody Address address) {
        return addressService.saveAddress(address);
    }

    @GetMapping("/{id}")
    public Optional<Address> findAddressById(@PathVariable Long id) {
        return addressService.findAddressById(id);
    }

    @DeleteMapping("/{id}")
    public void deleteAddressById(@PathVariable Long id) {
        addressService.deleteAddressById(id);
    }
}
