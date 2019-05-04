package com.screen.fleet.screenfleet;

import com.screen.fleet.screenfleet.dao.CompositionDao;
import com.screen.fleet.screenfleet.model.Composition;
import com.screen.fleet.screenfleet.model.Module;
import com.screen.fleet.screenfleet.model.Parameter;
import com.screen.fleet.screenfleet.web.controller.CompositionController;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.LinkedList;

@Component
public class DbSeeder implements CommandLineRunner {

    private CompositionController compositionController;

    public DbSeeder(CompositionController compositionController) {
        this.compositionController = compositionController;
    }


    @Override
    public void run(String... args) throws Exception {
        /*
        Parameter parameter = new Parameter("horizontal",1,"https://www.google.com/picture.png");
        Parameter p2 = new Parameter("ver",1,"https://www.youtube.com/watch?v=Hu-cyytqfp8");
        Parameter p3 = new Parameter("vertical",0,"https://www.youtube.com/");
        Parameter p4 = new Parameter("vertical",0,"https://www.photo.png/");

        LinkedList<Module> child = new LinkedList<>();
        LinkedList<Module> child2 = new LinkedList<>();
        Module m4 = new Module("picture",null,p4);
        child2.add(m4);
        Module m2 = new Module("video",child2,p2);
        Module m3 = new Module("slide",null,p3);
        child.add(m2);
        child.add(m3);
        Module module = new Module("picture",child,parameter);
        Composition composition = new Composition(4,"david", module);
        */
        LinkedList<Module> child = new LinkedList<>();
        Parameter parameter = new Parameter("horizontal",1,"https://www.google.com/picture.png");
        Module module = new Module("picture",child,parameter);
        Composition composition = new Composition(14,"david", module);

        this.compositionController.addCompositions(composition);
    }


}
