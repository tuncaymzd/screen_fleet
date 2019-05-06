package com.screen.fleet.screenfleet.tv.web.controller;


import com.screen.fleet.screenfleet.tv.dao.TvDao;
import com.screen.fleet.screenfleet.tv.model.Tv;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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
    public void addTv(@RequestBody Tv tv){
        this.tvDao.insert(tv);
    }

    @PostMapping
    public void updateTv(@RequestBody Tv tv) {
        this.tvDao.save(tv);
    }

    @DeleteMapping("/{id}")
    public void deleteTv(@PathVariable("id") int id) {
        this.tvDao.deleteById(id);
    }

    @GetMapping(value = "/{id}")
    public Tv getTvById(@PathVariable("id") int id) {
        return this.tvDao.findById(id);
    }


}
