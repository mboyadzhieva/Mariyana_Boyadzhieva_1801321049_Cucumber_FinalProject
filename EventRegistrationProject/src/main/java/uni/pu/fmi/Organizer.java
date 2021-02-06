package uni.pu.fmi;

import java.util.*;

/**
 * 
 */
public class Organizer extends Person {

    /**
     * Default constructor
     */
    public Organizer() {
    }

    /**
     * 
     */
    private String companyName;

    /**
     * 
     */
    private String companyInfo;

    /**
     * 
     */
    public Set<Event> events;

    /**
     * @return
     */
    public String getCompanyName() {
        // TODO implement here
        return companyName;
    }

    /**
     * @param companyName
     * @return
     */
    public void setCompanyName(String companyName) {
        // TODO implement here
        this.companyName = companyName;
    }

    /**
     * @return
     */
    public String getCompanyInfo() {
        // TODO implement here
        return companyInfo;
    }

    /**
     * @param companyInfo 
     * @return
     */
    public void setCompanyInfo(String companyInfo) {
        // TODO implement here
        this.companyInfo = companyInfo;
    }

}