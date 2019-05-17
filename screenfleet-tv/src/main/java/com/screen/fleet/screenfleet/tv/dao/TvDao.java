package com.screen.fleet.screenfleet.tv.dao;

import com.screen.fleet.screenfleet.tv.model.Tv;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface TvDao extends MongoRepository<Tv, String> {

    Tv findById(ObjectId id);

    void deleteById(String id);

}
