package codingkatas.service;

import com.mongodb.Mongo;
import com.mongodb.MongoClient;
import com.mongodb.WriteConcern;
import org.mongodb.morphia.Datastore;
import org.mongodb.morphia.Morphia;

import javax.enterprise.context.ApplicationScoped;

@ApplicationScoped
public class MorphiaService {

    private Datastore ds;

    public Datastore getDatastore() throws Exception {

        if(ds == null) {
            Mongo mongo = new MongoClient("localhost", 27017);
            mongo.setWriteConcern(WriteConcern.JOURNALED);
            ds = new Morphia().createDatastore(mongo, "codingkatas");
        }

        return ds;

    }

}
