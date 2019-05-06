package com.screen.fleet.screenfleet.tv;

import com.screen.fleet.screenfleet.tv.model.Tv;
import com.screen.fleet.screenfleet.tv.web.controller.TvController;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.LinkedList;

@Component
public class DbSeeder implements CommandLineRunner {

    private TvController tvController;

    public DbSeeder(TvController tvController) {
        this.tvController = tvController;
    }


    @Override
    public void run(String... args) throws Exception {
        Tv tv = new Tv("tv 1",0);
        this.tvController.addTv(tv);
    }

}
