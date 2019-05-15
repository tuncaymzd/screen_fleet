package com.screen.fleet.screenfleet.tv.model;

import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.GeneratedValue;
import javax.persistence.Id;


@Document(collection = "tv")
public class Tv {

    @Id
    private int id;

    private String name;
    private int compositionId;

    public Tv(String name, int compositionId) {
        this.name = name;
        this.compositionId = compositionId;
        this.id = (int) Math.random() * 10 * (int) Math.random() * 10000 / (int) Math.random() * 13;
    }

    public Tv() {

    }


    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getCompositionId() {
        return compositionId;
    }

    public void setCompositionId(int compositionId) {
        this.compositionId = compositionId;
    }
}
