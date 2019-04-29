package com.screen.fleet.screenfleet.model;

import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Document(collection = "compositions")
public class Composition {

    @Id
    @GeneratedValue
    private int id;

    private String name;
    private Module moduleTree;

    public Composition(){

    }

    public Composition(int id, String name, Module moduleTree) {
        this.id = id;
        this.name = name;
        this.moduleTree = moduleTree;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Module getModuleTree() {
        return moduleTree;
    }

    public void setModuleTree(Module moduleTree) {
        this.moduleTree = moduleTree;
    }

    @Override
    public String toString() {
        return "Composition{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", moduleTree=" + moduleTree +
                '}';
    }
}
