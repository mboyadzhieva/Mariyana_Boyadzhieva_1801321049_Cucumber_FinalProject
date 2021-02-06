package uni.pu.fmi;

import java.util.*;

/**
 * 
 */
public class Event {

    /**
     * Default constructor
     */
    public Event() {
    }

    /**
     * 
     */
    private String topic;


    /**
     * 
     */
    private String location;

    /**
     * 
     */
    private int capacity;

    /**
     * 
     */
    private double fee;

    /**
     * 
     */
    private Organizer organizer;

    /**
     * 
     */
    private Date eventDate;

    /**
     * 
     */
    private Set<Guest> guests;


    /**
     * 
     */
    private Category category;

    /**
     * 
     */
    public Set<Payment> payments;

    /**
     * @return
     */
    public String getTopic() {
        // TODO implement here
        return topic;
    }

    /**
     * @param topic 
     * @return
     */
    public void setTopic(String topic) {
        // TODO implement here
        this.topic = topic;
    }

    /**
     * @return
     */
    public Category getCategory() {
        // TODO implement here
        return category;
    }

    /**
     * @param category 
     * @return
     */
    public void setCategory(Category category) {
        // TODO implement here
        this.category = category;
    }

    /**
     * @return
     */
    public String getLocation() {
        // TODO implement here
        return location;
    }

    /**
     * @param location 
     * @return
     */
    public void setLocation(String location) {
        // TODO implement here
        this.location = location;
    }

    /**
     * @return
     */
    public int getCapacity() {
        // TODO implement here
        return capacity;
    }

    /**
     * @param capacity 
     * @return
     */
    public void setCapacity(int capacity) {
        // TODO implement here
        this.capacity = capacity;
    }

    /**
     * @return
     */
    public double getFee() {
        // TODO implement here
        return fee;
    }

    /**
     * @param fee 
     * @return
     */
    public void setFee(double fee) {
        // TODO implement here
        this.fee = fee;
    }

    /**
     * @return
     */
    public Organizer getOrganizer() {
        // TODO implement here
        return organizer;
    }

    /**
     * @param organizer 
     * @return
     */
    public void setOrganizer(Organizer organizer) {
        // TODO implement here
        this.organizer = organizer;
    }

    /**
     * @return
     */
    public Set<Guest> getGuests() {
        // TODO implement here
        return guests;
    }

    /**
     * @param guests 
     * @return
     */
    public void setGuests(Set<Guest> guests) {
        // TODO implement here
        this.guests = guests;
    }

    /**
     * @return
     */
    public Date getEventDate() {
        // TODO implement here
        return eventDate;
    }

    /**
     * @param eventDate 
     * @return
     */
    public void setEventDate(Date eventDate) {
        // TODO implement here
        this.eventDate = eventDate;
    }

}