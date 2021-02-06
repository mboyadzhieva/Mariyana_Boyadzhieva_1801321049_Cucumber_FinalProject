package uni.pu.fmi;

import java.util.*;

/**
 * 
 */
public class Payment {

    /**
     * Default constructor
     */
    public Payment() {
    }

    public Payment(User user, String creditCardNum) {
        this.user = user;
    }

    /**
     * 
     */
    private String creditCardNum;

    /**
     * 
     */
    private Date creditCardExpiration;

    /**
     * 
     */
    private String creditCardCVC;

    /**
     * 
     */
    private User user;

    /**
     * 
     */
    private Event event;

    /**
     * @return
     */
    public String getCreditCardNum() {
        // TODO implement here
        return creditCardNum;
    }

    /**
     * @param creditCardNum 
     * @return
     */
    public void setCreditCardNum(String creditCardNum) {
        // TODO implement here
        this.creditCardNum = creditCardNum;
    }

    /**
     * @return
     */
    public Date getCreditCardExpiration() {
        // TODO implement here
        return creditCardExpiration;
    }

    /**
     * @param creditCardExpiration 
     * @return
     */
    public void setCreditCardExpiration(Date creditCardExpiration) {
        // TODO implement here
        this.creditCardExpiration = creditCardExpiration;
    }

    /**
     * @return
     */
    public String getCreditCardCVC() {
        // TODO implement here
        return creditCardCVC;
    }

    /**
     * @param creditCardCVC
     * @return
     */
    public void setCreditCardCSV(String creditCardCVC) {
        // TODO implement here
        this.creditCardCVC = creditCardCVC;
    }

    /**
     * @return
     */
    public User getUser() {
        // TODO implement here
        return user;
    }

    /**
     * @param user 
     * @return
     */
    public void setUser(User user) {
        // TODO implement here
        this.user = user;
    }

    /**
     * @return
     */
    public Event getEvent() {
        // TODO implement here
        return event;
    }

    /**
     * @param event 
     * @return
     */
    public void setEvent(Event event) {
        // TODO implement here
        this.event = event;
    }

}