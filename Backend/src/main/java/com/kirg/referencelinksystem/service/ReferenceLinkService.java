package com.kirg.referencelinksystem.service;

import com.kirg.referencelinksystem.data.ReferenceLinkRepository;
import com.kirg.referencelinksystem.entity.ReferenceLink;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ReferenceLinkService {

    private ReferenceLinkRepository referenceLinkRepository;

    public ReferenceLinkService(ReferenceLinkRepository referenceLinkRepository) {
        this.referenceLinkRepository = referenceLinkRepository;
    }

    public List<ReferenceLink> findAllLinks() {
        return referenceLinkRepository.findAll();
    }

    public ReferenceLink saveReferenceLink(ReferenceLink referenceLink) {
        return referenceLinkRepository.save(referenceLink);
    }

    public Optional<ReferenceLink> findLinkById(Long id) {
        return referenceLinkRepository.findById(id);
    }

    public boolean existsLinkById(Long id) {
        return referenceLinkRepository.existsById(id);
    }

    public void deleteLinkById(Long id) {
        referenceLinkRepository.deleteById(id);
    }
}
