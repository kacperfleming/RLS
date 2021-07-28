package com.kirg.referencelinksystem.service;

import com.kirg.referencelinksystem.data.AddressRepository;
import com.kirg.referencelinksystem.entity.Address;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AddressService {

    private AddressRepository addressRepository;

    public AddressService(AddressRepository addressRepository) {
        this.addressRepository = addressRepository;
    }

    public Address saveAddress(Address address) {
        return addressRepository.save(address);
    }

    public Optional<Address> findAddressById(Long id) {
        return addressRepository.findById(id);
    }

    public boolean existsAddressById(Long id) {
        return addressRepository.existsById(id);
    }

    public void deleteAddressById(Long id) {
        addressRepository.deleteById(id);
    }
}
