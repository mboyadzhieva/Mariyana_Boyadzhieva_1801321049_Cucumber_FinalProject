package uni.pu.fmi;

import java.util.*;

public class Payment {

    public Payment() {
    }

    public Payment(User user, String creditCardNum) {
        this.user = user;
        this.creditCardNum = creditCardNum;
    }

    private String creditCardNum;

    private Date creditCardExpiration;

    private String creditCardCVC;

    private User user;

    private Event event;

    public String getCreditCardNum() {
        return creditCardNum;
    }

    public void setCreditCardNum(String creditCardNum) {
        this.creditCardNum = creditCardNum;
    }

    public Date getCreditCardExpiration() {
        return creditCardExpiration;
    }

    public void setCreditCardExpiration(Date creditCardExpiration) {
        this.creditCardExpiration = creditCardExpiration;
    }

    public String getCreditCardCVC() {
        return creditCardCVC;
    }

    public void setCreditCardCSV(String creditCardCVC) {
        this.creditCardCVC = creditCardCVC;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Event getEvent() {
        return event;
    }

    public void setEvent(Event event) {
        this.event = event;
    }

}