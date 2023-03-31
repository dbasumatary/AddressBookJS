//UC1 - Create an address book contact
class AddressBook{
    constructor(...params){
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phoneNumber = params[6];
        this.email = params[7]
    }

    //convert object to string
    toString(){
        return "First Name : "+ this.firstName + ", Last Name : "+ this.lastName + ", Address : "+ this.address + ", City : "+ this.city + ", State : "+ 
        this.state + ", Zip Code : "+ this.zip+ ", Phone Number : "+ this.phoneNumber + ", Email : "+ this.email;
    }
}

let addressBook = new AddressBook("Rahul", "Jha", "India" , "Bangalore", "Karnataka", 231234, 634562672, "rahul_jha@ggg.com");
console.log(addressBook.toString());