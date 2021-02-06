package uni.pu.fmi;

import java.util.*;

/**
 * 
 */
public class Guest extends Person {

    /**
     * Default constructor
     */
    public Guest() {
    }

    /**
     * 
     */
    private String description;

    /**
     * 
     */
    private int yearsOfExperience;

    /**
     * 
     */
    public Set<Event> events;

    /**
     * @return
     */
    public String getDescription() {
        // TODO implement here
        return description;
    }

    /**
     * @param description 
     * @return
     */
    public void setDescription(String description) {
        // TODO implement here
        this.description = description;
    }

    /**
     * @return
     */
    public int getYearsOfExperience() {
        // TODO implement here
        return yearsOfExperience;
    }

    /**
     * @param yearsOfExperience 
     * @return
     */
    public void setYearsOfExperience(int yearsOfExperience) {
        // TODO implement here
        this.yearsOfExperience = yearsOfExperience;
    }

}