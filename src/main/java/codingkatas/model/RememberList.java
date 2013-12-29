package codingkatas.model;

import org.mongodb.morphia.annotations.Entity;
import org.mongodb.morphia.annotations.Id;

import java.io.Serializable;
import java.util.List;


@Entity("rememberList")
public class RememberList implements Serializable {

    @Id
    private String id;

    private String name;
    private String description;
    private Status status;

    private List<Remember> rememberings;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }

    public List<Remember> getRememberings() {
        return rememberings;
    }

    public void setRememberings(List<Remember> rememberings) {
        this.rememberings = rememberings;
    }
}
