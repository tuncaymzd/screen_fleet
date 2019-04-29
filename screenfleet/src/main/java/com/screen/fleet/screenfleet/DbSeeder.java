package com.screen.fleet.screenfleet;

import com.screen.fleet.screenfleet.dao.CompositionDao;
import com.screen.fleet.screenfleet.model.Composition;
import com.screen.fleet.screenfleet.model.Module;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DbSeeder implements CommandLineRunner {

    private CompositionDao compositionDao;

    public DbSeeder(CompositionDao compositionDao) {
        this.compositionDao = compositionDao;
    }


    @Override
    public void run(String... args) throws Exception {
        Module module = new Module("mod");
        Composition composition = new Composition(10,"tuncay", module);

        this.compositionDao.deleteAll();
        this.compositionDao.save(composition);
    }


}
