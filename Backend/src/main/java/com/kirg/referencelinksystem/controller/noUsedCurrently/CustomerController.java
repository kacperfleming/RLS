package com.kirg.referencelinksystem.controller.noUsedCurrently;

/*
import com.kirg.referencelinksystem.entity.Address;
import com.kirg.referencelinksystem.entity.notUsedCurrently.Customer;
import com.kirg.referencelinksystem.service.AddressService;
import com.kirg.referencelinksystem.service.notCurrentlyUsed.CustomerService;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/customer")
public class CustomerController {

    private CustomerService customerService;


    public CustomerController(CustomerService customerService) {
        this.customerService = customerService;
    }

    @GetMapping
    public List<Customer> findAllCustomers() {
        return customerService.findAllCustomers();
    }

    @PostMapping
    public Customer saveCustomer(@Valid @RequestBody Customer customer) {
        return customerService.saveCustomer(customer);
    }

    @GetMapping("/{id}")
    public Optional<Customer> findCustomerById(@PathVariable Long id) {
        return customerService.findCustomerById(id);
    }

    @DeleteMapping("/{id}")
    public void deleteCustomerById(@PathVariable Long id) {
        customerService.deleteCustomerById(id);
    }



}
*/