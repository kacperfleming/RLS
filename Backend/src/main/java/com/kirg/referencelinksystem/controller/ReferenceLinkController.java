package com.kirg.referencelinksystem.controller;

import com.kirg.referencelinksystem.entity.ReferenceLink;
import com.kirg.referencelinksystem.service.ReferenceLinkService;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Optional;

@RestController
@RequestMapping("/referencelink")
public class ReferenceLinkController {
    private ReferenceLinkService referenceLinkService;

    public ReferenceLinkController(ReferenceLinkService referenceLinkService) {
        this.referenceLinkService = referenceLinkService;
    }

    @PostMapping
    public ReferenceLink saveReferenceLink(@Valid @RequestBody ReferenceLink referenceLink) {
        return referenceLinkService.saveReferenceLink(referenceLink);
    }

    @GetMapping("/{id}")
    public Optional<ReferenceLink> findLinkById(@PathVariable Long id) {
        return referenceLinkService.findLinkById(id);
    }

    @DeleteMapping("/{id}")
    public void deleteLinkById(@PathVariable Long id) {
        referenceLinkService.deleteLinkById(id);
    }
}
