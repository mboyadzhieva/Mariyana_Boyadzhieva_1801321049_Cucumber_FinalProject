package uni.pu.fmi;

import java.util.*;

public class Guest extends Person {

    public Guest() {
    }

    private String description;

    private int yearsOfExperience;

    public Set<Event> events;

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getYearsOfExperience() {
        return yearsOfExperience;
    }

    public void setYearsOfExperience(int yearsOfExperience) {
        this.yearsOfExperience = yearsOfExperience;
    }

}