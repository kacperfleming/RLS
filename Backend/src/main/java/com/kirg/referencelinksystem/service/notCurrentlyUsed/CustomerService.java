package com.kirg.referencelinksystem.service.notCurrentlyUsed;

import com.kirg.referencelinksystem.data.notUsedCurrently.CustomerRepository;
import com.kirg.referencelinksystem.entity.notUsedCurrently.Customer;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CustomerService {

    private CustomerRepository customerRepository;

    public CustomerService(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }

    public List<Customer> findAllCustomers() {
        return customerRepository.findAll();
    }

    public Customer saveCustomer(Customer customer) {
        return customerRepository.save(customer);
    }

    public Optional<Customer> findCustomerById(Long id) {
        return customerRepository.findById(id);
    }

    public boolean existsCustomerById(Long id) {
        return customerRepository.existsById(id);
    }

    public void deleteCustomerById(Long id) {
        customerRepository.deleteById(id);
    }
}
