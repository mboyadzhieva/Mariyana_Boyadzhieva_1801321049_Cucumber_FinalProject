package uni.pu.fmi.services;

import uni.pu.fmi.Event;
import uni.pu.fmi.Payment;
import uni.pu.fmi.User;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;

public class EventRegisterService {
    public static String registerForAnEvent(String firstName, String lastName, String email, String creditCardNum,
                                            String creditCardExpirationStr, String creditCardCVC, String eventTopic,
                                            String eventDateStr) {

        if (firstName == null || "".equals(firstName) || lastName == null || "".equals(lastName) || email == null
                || "".equals(email) || creditCardNum == null || "".equals(creditCardNum)
                || creditCardExpirationStr == null || "".equals(creditCardExpirationStr) || creditCardCVC == null
                || "".equals(creditCardCVC) || eventTopic == null || "".equals(eventTopic) || eventDateStr == null
                || "".equals(eventDateStr)) {
            return "Всички полета са задължителни!";
        }

        SimpleDateFormat dateFormatEvent = new SimpleDateFormat("dd-MM-yyyy HH:mm");
        SimpleDateFormat dateFormatCreditCard = new SimpleDateFormat("dd-MM-yyyy");

        Date eventDate;
        Date creditCardExpiration;

        try {
            eventDate = dateFormatEvent.parse(eventDateStr);
        } catch (ParseException e) {
            return "Датата на събитието не е в правилния формат!";
        }

        try {
            creditCardExpiration = dateFormatCreditCard.parse(creditCardExpirationStr);
        } catch (ParseException e) {
            return "Датата на изтичане на валидността на кредитната карта не е в правилния формат!";
        }

        String eventValidationMsg = eventValidation(eventTopic, eventDate);

        if (!eventValidationMsg.equals("OK")) {
            return eventValidationMsg;
        }

        String emailValidationMsg = emailValidation(firstName, lastName, email);

        if (!emailValidationMsg.equals("OK")) {
            return emailValidationMsg;
        }

        String creditCardValidationMsg = creditCardValidation(creditCardNum, creditCardExpiration, creditCardCVC);

        if (!creditCardValidationMsg.equals("OK")) {
            return creditCardValidationMsg;
        }

        Event selectedEvent = getEvents().stream().filter(e -> e.getTopic().equals(eventTopic)
                && e.getEventDate().equals(eventDate)).findFirst().orElse(null);

        boolean isUserAlreadyRegistered = false;

        if (selectedEvent.payments != null) {
            isUserAlreadyRegistered = selectedEvent.payments.stream().anyMatch(
                    u -> u.getUser().getEmail().equals(email));

        }

        if (isUserAlreadyRegistered) {
            return "Вече сте регистрирани за това събитие!";
        }

        Set<Payment> payments = new HashSet<Payment>();
        User user = new User(firstName, lastName, email);
        payments.add(new Payment(user, creditCardNum));
        selectedEvent.payments = payments;
        selectedEvent.setCapacity(selectedEvent.getCapacity() - 1);

        return "Успешно се регистрирахте и заплатихте за избраното събитие!";
    }

    public static List<Event> getEvents() {
        ArrayList<Event> eventList = new ArrayList<Event>();

        SimpleDateFormat dateFormat = new SimpleDateFormat("dd-MM-yyyy HH:mm");
        Date eventDate = null;

        try {
            eventDate = dateFormat.parse("23-02-2021 17:30");
        } catch (ParseException e) {
            e.printStackTrace();
        }

        Event event = new Event("Social media marketing", eventDate, 20);

        HashSet<Payment> payments = new HashSet<Payment>();
        event.payments = payments;
        event.payments.add(new Payment(
                new User("John", "Doe", "johndoe@gmail.com"),
                "2121212121667687"));

        eventList.add(event);

        try {
            eventDate = dateFormat.parse("22-02-2021 12:30");
        } catch (ParseException e) {
            e.printStackTrace();
        }

        Event eventTwo = new Event("Software Engineering", eventDate, 0);
        eventList.add(eventTwo);

        try {
            eventDate = dateFormat.parse("09-02-2021 08:00");
        } catch (ParseException e) {
            e.printStackTrace();
        }

        Event eventThree = new Event("Skincare", eventDate, 30);
        eventList.add(eventThree);

        return eventList;
    }

    public static List<User> getUsers() {
        ArrayList<User> users = new ArrayList<User>();

        String firstName = "John";
        String latsName = "Doe";
        String email = "johndoe@gmail.com";

        User user = new User();
        user.setName(firstName, latsName);
        user.setEmail(email);

        users.add(user);

        return users;
    }

    public static String creditCardValidation(String num, Date expiration, String cvc) {
        if (cvc.length() < 3 || cvc.length() > 4) {
            return "Невалиден CVC номер!";
        } else if (expiration.getTime() < new Date(System.currentTimeMillis()).getTime()) {
            return "Картата Ви е с изтекъл срок!";
        } else if (num.length() < 16 || num.length() > 19) {
            return "Номерът на кредитната Ви карта е невалиден!";
        }
        return "OK";
    }

    public static String eventValidation(String eventTopic, Date eventDate) {
        List<Event> events = getEvents();

        boolean isEventExist = events.stream().anyMatch(event ->
                event.getTopic().equals(eventTopic)
                        && event.getEventDate().equals(eventDate));

        if (!isEventExist) {
            return "Няма такова събитие. Моля проверете въведените данни!";
        } else {
            Event selectedEvent = events.stream().filter(e -> e.getTopic().equals(eventTopic)
                    && e.getEventDate().equals(eventDate)).findAny().orElse(null);

            boolean isEventFull = selectedEvent.getCapacity() <= 0;

            if (isEventFull) {
                return "Всички места са заети!";
            }
        }

        int dayInMilliseconds = 86400000;
        Date currentDate = new Date(System.currentTimeMillis());

        if (eventDate.getTime() - currentDate.getTime() < dayInMilliseconds) {
            return "Срокът за записване е изтекъл!";
        }

        return "OK";
    }

    public static String emailValidation(String firstName, String lastName, String email) {
        boolean isEmailTaken = getUsers().stream().anyMatch(user -> user.getEmail().equals(email)
                && !user.getName().equals(firstName + " " + lastName));

        if (isEmailTaken) {
            return "Този имейл се използва от друг потребител!";
        }

        return "OK";
    }
}
