package uni.pu.fmi;

import java.util.*;

public class Organizer extends Person {

    public Organizer() {
    }

    private String companyName;

    private String companyInfo;

    public Set<Event> events;

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public String getCompanyInfo() {
        return companyInfo;
    }

    public void setCompanyInfo(String companyInfo) {
        this.companyInfo = companyInfo;
    }

}