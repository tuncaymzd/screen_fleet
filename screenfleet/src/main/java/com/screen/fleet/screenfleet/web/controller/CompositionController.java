package com.screen.fleet.screenfleet.web.controller;

import com.screen.fleet.screenfleet.dao.CompositionDao;
import com.screen.fleet.screenfleet.model.Composition;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", allowedHeaders = "*")
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
    public void addCompositions(@RequestBody Composition composition) throws Exception {
        Composition tmp = new Composition(composition.getName(), composition.getModuleTree());
        this.compositionDao.insert(tmp);
/*        if (composition.isValid()) {
                       Composition tmp = new Composition(composition.getName(), composition.getModuleTree());
 this.compositionDao.insert(tmp);
        } else {
            throw new Exception("This composition is invalid !");
        }*/
    }

    @PostMapping
    public void updateCompositions(@RequestBody Composition composition) throws Exception {
        this.compositionDao.save(composition);
        /*if (composition.isValid()) {
            this.compositionDao.save(composition);
        } else {
            throw new Exception("This composition is invalid !");
        }*/
    }

    @DeleteMapping("/{id}")
    public void deleteCompositions(@PathVariable("id") String id) {
        this.compositionDao.deleteById(id);
    }

/*
    @GetMapping(value = "/{id}")
    public Composition getCompositionById(@PathVariable("id") String id) {
        return compositionDao.findById(id);
    }
    */
}
