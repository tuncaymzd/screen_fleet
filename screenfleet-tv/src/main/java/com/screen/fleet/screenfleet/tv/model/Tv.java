package com.screen.fleet.screenfleet.tv.model;

import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.UUID;


@Document(collection = "tv")
public class Tv {

    @Id
    private String id;

    private String name;
    private String compositionId;

    public Tv(String name, String compositionId) {
        this.name = name;
        this.compositionId = compositionId;
        this.id = UUID.randomUUID().toString();
    }

    public Tv() {

    }

    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCompositionId() {
        return compositionId;
    }

    public void setCompositionId(String compositionId) {
        this.compositionId = compositionId;
    }
}
