package dk.topdanmark.tp.trex.resources;

import dk.topdanmark.tp.trex.model.RememberList;
import dk.topdanmark.tp.trex.service.MorphiaService;
import org.bson.types.ObjectId;
import org.mongodb.morphia.Key;
import org.mongodb.morphia.query.Query;

import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import java.util.ArrayList;
import java.util.List;

@Path("/RememberList")
public class RememberListResource {

    @Inject
    MorphiaService mongo;

    @GET
    public List<RememberList> query() throws Exception {

        List<RememberList> queryList = new ArrayList<RememberList>();
        Query<RememberList> rememberLists = mongo.getDatastore().find(RememberList.class);
        Iterable<RememberList> fetch = rememberLists.fetch();
        for (RememberList rememberList : fetch) {
            queryList.add(rememberList);
        }

        return queryList;
    }

    @GET
    @Path("/{id}")
    public RememberList get(@PathParam(value = "id") String id) throws Exception {
        return doGetById(id);
    }

    private RememberList doGetById(String id) throws Exception {
        ObjectId mongoId = new ObjectId(id);
        Query<RememberList> query = mongo.getDatastore().find(RememberList.class).field("id").equal(mongoId);
        RememberList toReturn = query.get();
        return toReturn;
    }

    @POST
    public RememberList createRememberList(RememberList rememberList) throws Exception {

        Key<RememberList> key = mongo.getDatastore().save(rememberList);
        return doGetById((String) key.getId());
    }



}
