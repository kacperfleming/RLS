package com.kirg.referencelinksystem.data.notUsedCurrently;

import com.kirg.referencelinksystem.entity.notUsedCurrently.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomerRepository extends JpaRepository <Customer,Long> {
}
