package com.screen.fleet.screenfleet.model;

import com.sun.org.apache.xpath.internal.operations.Mod;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.LinkedList;

@Document(collection = "modules")
public class Module {
    private String type;
    private LinkedList<Module> childen;

    public Module(){

    }

    public Module(String type) {
        this.type = type;
    }

    @Override
    public String toString() {
        return "Module{" +
                "type='" + type + '\'' +
                '}';
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }
    //



}
