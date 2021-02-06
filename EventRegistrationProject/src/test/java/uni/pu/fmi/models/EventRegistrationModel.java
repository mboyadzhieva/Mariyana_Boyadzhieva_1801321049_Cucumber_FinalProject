package uni.pu.fmi.models;

import uni.pu.fmi.services.EventRegisterService;

import java.util.Date;

public class EventRegistrationModel {

    private String firstName;
    private String lastName;
    private String email;
    private String creditCardNum;
    private Date creditCardExpiration;
    private String creditCardCVC;
    private String eventTopic;
    private Date eventDate;
    private String message;

    public void openRegisterScreen(){
        System.out.println("Екран за регистрация на конкретно събитие.");
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setCreditCardNum(String creditCardNum) {
        this.creditCardNum = creditCardNum;
    }

    public void setCreditCardExpiration(Date creditCardExpiration) {
        this.creditCardExpiration = creditCardExpiration;
    }

    public void setCreditCardCVC(String creditCardCVC) {
        this.creditCardCVC = creditCardCVC;
    }

    public void setEventTopic(String eventTopic) {
        this.eventTopic = eventTopic;
    }

    public void setEventDate(Date eventDate) {
        this.eventDate = eventDate;
    }

    public void clickSendDataBtn(){
        message = EventRegisterService.registerForAnEvent(firstName, lastName, email, creditCardNum,
                creditCardExpiration, creditCardCVC, eventTopic, eventDate);
    }

    public String getMessage(){
        return message;
    }
}
