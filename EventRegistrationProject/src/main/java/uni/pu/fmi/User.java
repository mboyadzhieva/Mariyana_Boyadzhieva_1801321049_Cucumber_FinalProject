package uni.pu.fmi;

import java.util.*;

/**
 * 
 */
public class User extends Person {

    /**
     * Default constructor
     */
    public User() {
    }

    public User(String firstName, String lastName, String email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }

    /**
     * 
     */
    private String phoneNumber;

    /**
     * 
     */
    public Set<Payment> payments;

    /**
     * @return
     */
    public String getPhoneNumber() {
        // TODO implement here
        return phoneNumber;
    }

    /**
     * @param phoneNumber 
     * @return
     */
    public void setPhoneNumber(String phoneNumber) {
        // TODO implement here
        this.phoneNumber = phoneNumber;
    }

}