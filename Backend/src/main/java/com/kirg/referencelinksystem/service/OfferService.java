package com.kirg.referencelinksystem.service;

import com.kirg.referencelinksystem.data.OfferRepository;
import com.kirg.referencelinksystem.entity.Offer;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OfferService {

    private OfferRepository offerRepository;

    public OfferService(OfferRepository offerRepository) {
        this.offerRepository = offerRepository;
    }

    public Offer save(Offer offer) {
        return offerRepository.save(offer);
    }

    public Optional<Offer> findById(Long id) {
        return offerRepository.findById(id);
    }

    public Offer getById(Long id) {
        return offerRepository.getById(id);
    }

    public void deleteById(Long id) {
        offerRepository.deleteById(id);
    }

    public List<Offer> findAll() {
        return offerRepository.findAll();
    }
}
