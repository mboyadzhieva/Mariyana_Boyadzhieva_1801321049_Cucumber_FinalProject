package uni.pu.fmi;

public class Person {

    public Person() {
    }

    protected String firstName;

    protected String lastName;

    protected String email;

    public String getName() {
        return firstName + " " + lastName;
    }

    public void setName(String firstName, String lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

}