package com.screen.fleet.screenfleet.dao;

import com.screen.fleet.screenfleet.model.Composition;
import org.bson.types.ObjectId;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface CompositionDao extends MongoRepository<Composition, String> {

    Composition findById(ObjectId id);

    Composition findById(int id);

    void deleteById(int id);
}
