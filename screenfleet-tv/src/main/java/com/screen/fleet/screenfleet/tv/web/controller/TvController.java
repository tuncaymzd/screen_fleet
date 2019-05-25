package com.screen.fleet.screenfleet.tv.web.controller;


import com.screen.fleet.screenfleet.tv.dao.TvDao;
import com.screen.fleet.screenfleet.tv.model.Tv;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/Tv")
public class TvController {

    @Autowired
    private TvDao tvDao;


    public TvController(TvDao tvDao) {
        this.tvDao = tvDao;
    }

    @GetMapping(value = "/all")
    public List<Tv> getAllTv() {
        return this.tvDao.findAll();
    }

    @PutMapping
    public void addTv(@RequestBody Tv tv) {
        Tv tmp = new Tv(tv.getName(), tv.getCompositionId());
        this.tvDao.insert(tmp);
    }

    @PostMapping
    public void updateTv(@RequestBody Tv tv) {
        this.tvDao.save(tv);
    }

    @DeleteMapping("/{id}")
    public void deleteTv(@PathVariable("id") String id) {
        this.tvDao.deleteById(id);
    }

}
