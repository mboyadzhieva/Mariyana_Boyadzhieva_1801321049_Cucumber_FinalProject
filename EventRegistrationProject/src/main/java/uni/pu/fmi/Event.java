package uni.pu.fmi;

import java.util.*;

public class Event {

    public Event() {
    }

    public Event(String topic, Date eventDate, int capacity) {
        this.topic = topic;
        this.eventDate = eventDate;
        this.capacity = capacity;
    }

    private String topic;

    private String location;

    private int capacity;

    private double fee;

    private Organizer organizer;

    private Date eventDate;

    private Set<Guest> guests;

    private Category category;

    public Set<Payment> payments;

    public String getTopic() {
        return topic;
    }

    public void setTopic(String topic) {
        this.topic = topic;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public int getCapacity() {
        return capacity;
    }

    public void setCapacity(int capacity) {
        this.capacity = capacity;
    }

    public double getFee() {
        return fee;
    }

    public void setFee(double fee) {
        this.fee = fee;
    }

    public Organizer getOrganizer() {
        return organizer;
    }

    public void setOrganizer(Organizer organizer) {
        this.organizer = organizer;
    }

    public Set<Guest> getGuests() {
        return guests;
    }

    public void setGuests(Set<Guest> guests) {
        this.guests = guests;
    }

    public Date getEventDate() {
        return eventDate;
    }

    public void setEventDate(Date eventDate) {
        this.eventDate = eventDate;
    }
}