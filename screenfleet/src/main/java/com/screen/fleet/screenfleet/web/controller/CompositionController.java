package com.screen.fleet.screenfleet.web.controller;

import com.screen.fleet.screenfleet.dao.CompositionDao;
import com.screen.fleet.screenfleet.model.Composition;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/Compositions")
public class CompositionController {

    @Autowired
    private CompositionDao compositionDao;

    public CompositionController(CompositionDao compositionDao) {
        this.compositionDao = compositionDao;
    }

    @GetMapping(value = "/all")
    public List<Composition> getAllCompositions() {
        return this.compositionDao.findAll();
    }

    @PutMapping
    public void addCompositions(@RequestBody Composition composition ) {
        this.compositionDao.insert(composition);
    }

    @PostMapping
    public void updateCompositions(@RequestBody Composition composition) {
        this.compositionDao.save(composition);
    }

    @DeleteMapping("/{id}")
    public void deleteCompositions(@PathVariable("id") int id) {
        this.compositionDao.deleteById(id);
    }


    @GetMapping(value = "/{id}")
    public Composition getCompositionById(@PathVariable("id") int id) {
        return compositionDao.findById(id);
    }
}
