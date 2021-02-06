package uni.pu.fmi;

import java.util.*;

/**
 * 
 */
public class Person {

    /**
     * Default constructor
     */
    public Person() {
    }

    /**
     * 
     */
    protected String firstName;

    /**
     * 
     */
    protected String lastName;

    /**
     * 
     */
    protected String email;

    /**
     * @return
     */
    public String getName() {
        // TODO implement here
        return firstName + " " + lastName;
    }

    /**
     * @param firstName 
     * @param lastName 
     * @return
     */
    public void setName(String firstName, String lastName) {
        // TODO implement here
        this.firstName = firstName;
        this.lastName = lastName;
    }

    /**
     * @return
     */
    public String getEmail() {
        // TODO implement here
        return email;
    }

    /**
     * @param email 
     * @return
     */
    public void setEmail(String email) {
        this.email = email;
    }

}