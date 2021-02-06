package uni.pu.fmi;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import uni.pu.fmi.models.EventRegistrationModel;

import java.text.SimpleDateFormat;
import java.util.Date;

import static org.junit.Assert.assertEquals;

public class EventRegistrationSteps {

    EventRegistrationModel eventModel = new EventRegistrationModel();

    @Given("^Потребителят отваря страницата за записване за събитие\\.$")
    public void openHomeScreen() throws Throwable {
        eventModel.openRegisterScreen();
    }

    @When("^Въвежда име \"([^\"]*)\"$")
    public void addFirstName(String firstName) throws Throwable {
        eventModel.setFirstName(firstName);
    }

    @When("^Въвежда фамилия \"([^\"]*)\"$")
    public void addLastName(String lastName) throws Throwable {
        eventModel.setLastName(lastName);
    }

    @When("^Въвежда имейл \"([^\"]*)\"$")
    public void addEmail(String email) throws Throwable {
        eventModel.setEmail(email);
    }

    @When("^Въвежда номер на кредитна карта \"([^\"]*)\"$")
    public void addCreditCardNum(String creditCardNum) throws Throwable {
        eventModel.setCreditCardNum(creditCardNum);
    }

    @When("^Въвежда дата на изтичане на кредитната карта \"([^\"]*)\"$")
    public void addCreditCardExpiration(String creditCardExpiration) throws Throwable {
        SimpleDateFormat sdf = new SimpleDateFormat("dd-MM-yyyy");
        Date date = sdf.parse(creditCardExpiration);
        eventModel.setCreditCardExpiration(date);
    }

    @When("^Въвежда CVC номер на кредитната карта \"([^\"]*)\"$")
    public void addCreditCardCSV(String creditCardCVC) throws Throwable {
        eventModel.setCreditCardCVC(creditCardCVC);
    }

    @When("^Въвежда името на събитието \"([^\"]*)\"$")
    public void addEventTopic(String eventTopic) throws Throwable {
        eventModel.setEventTopic(eventTopic);
    }

    @When("^Въвежда датата на събитието \"([^\"]*)\"$")
    public void addEventDate(String eventDate) throws Throwable {
        SimpleDateFormat sdf = new SimpleDateFormat("dd-MM-yyyy");
        Date date = sdf.parse(eventDate);
        eventModel.setEventDate(date);
    }

    @When("^Натиска върху бутона за изпращане на данните\\.$")
    public void clickSendDataBtn() throws Throwable {
        eventModel.clickSendDataBtn();
    }

    @Then("^Вижда съобщение \"([^\"]*)\" за резултата от регистрацията\\.$")
    public void getMessage(String expectedMessage) throws Throwable {
        assertEquals(expectedMessage, eventModel.getMessage());
    }


}
