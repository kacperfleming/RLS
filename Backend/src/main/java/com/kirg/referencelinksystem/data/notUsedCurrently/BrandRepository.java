package com.kirg.referencelinksystem.data.notUsedCurrently;

import com.kirg.referencelinksystem.entity.notUsedCurrently.Brand;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BrandRepository extends JpaRepository<Brand,Long> {
}
