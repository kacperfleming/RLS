package com.kirg.referencelinksystem.data;

import com.kirg.referencelinksystem.entity.ReferenceLink;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReferenceLinkRepository extends JpaRepository<ReferenceLink,Long> {
}
