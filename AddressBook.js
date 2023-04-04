console.log("Welcome to Address Book System\n");
const nameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
const addressRegex = RegExp('^[a-zA-Z0-9#,]{4,}$');
const cityStateRegex = RegExp('^[a-zA-Z]{4,}$');
const zipRegex = RegExp("^[0-9]{3}\\s{0,1}[0-9]{3}$");
const phoneNumberRegex = RegExp("^[6-9]{1}[0-9]{9}$");
const emailRegex = RegExp("^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$");

class AddressBook{
    //Creating anaddress book contact details and initializing with constructor (UC1)
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

    //check the patterns in all the setters (UC2)
    getFirstName() {return this.firstName;}
    setFirstName(firstName) {
        if (nameRegex.test(firstName)) {
          this.firstName = firstName;
        } else throw "FIRST NAME is Incorrect";
    }

    getLastName() {return this.lastName;}
    setLastName(lastName) {
        if (nameRegex.test(lastName)) {
          this.lastname = lastName;
        } else throw "LAST NAME is Incorrect";
    }

    getAddress() {return this.address;}
    setAddress(address) {
        if (addressRegex.test(address)) {
          this.address = address;
        } else throw "ADDRESS is Incorrect";
    }
      
    getCity() {return this.city;}
    setCity(city) {
        if (cityStateRegex.test(city)) {
          this.city = city;
        } else throw "CITY is Incorrect";
    }
    
    getState() {return this.state;}
    setState(state) {
        if (cityStateRegex.test(state)) {
          this.state = state;
        } else throw "STATE is Incorrect";
    }

    getzip(){return this.zip;}
    setzip(zip){
        if (zipRegex.test(zip))
            this.zip = zip;
        else throw "ZIP is Incorrect";
    }

    getphoneNumber(){return this.phoneNumber;}
    setphoneNumber(phoneNumber){
        if (phoneNumberRegex.test(phoneNumber))
            this.phoneNumber = phoneNumber;
        else throw "PHONE NUMBER is Incorrect";
    }

    getemail(){return this.email;}
    setemail(email){
        if (emailRegex.test(email))
            this.email = email;
        else throw "EMAIL ADDRESS is Incorrect";
    }

    //convert object to string
    toString(){
        return "First Name : "+ this.firstName + "\nLast Name : "+ this.lastName + "\nAddress : "+ this.address + "\nCity : "+ this.city + "\nState : "+ 
        this.state + "\nZip Code : "+ this.zip+ "\nPhone Number : "+ this.phoneNumber + "\nEmail : "+ this.email;
    }
}

//Creating new address book array (UC3)
let addressBookArray = new Array();

try{  //Using push to store details in an array by invoking the class constructor
    addressBookArray.push(new AddressBook("Shubham", "Kumar" , "India" , "Bokaro", "Jharkhand", 243243, 345728462, "shubha@kkk.comb"))
}catch(e){console.log(e);}
console.log(addressBookArray);

//Finding and editing contact (UC4)
let contacts = addressBookArray.find(contact => contact.firstName == "Shubham");
if(contacts){
    addressBookArray.pop();
    contacts.setFirstName("Sudheer");
    contacts.setLastName("Kumar");
    contacts.setAddress("WestGodavari");
    contacts.setCity("Hyderabad");
    contacts.setState("Telangana");
    contacts.setzip(123456);
    contacts.setphoneNumber(9191919191);
    contacts.setemail("sudheer123@gmail.com");
    addressBookArray.push(contacts);
    console.log(addressBookArray.toString());
}else{
    console.log("No such contact found");
}

//Find and delete contact (UC5)
let removeContacts = addressBookArray.find(contact => contact.firstName == "Sudheer");
if(removeContacts){
    addressBookArray.pop();
    console.log("\nContact successfully deleted.");
    console.log(addressBookArray.toString());
}else{
    console.log("\nNo such contact found");
}

//Find number of contacts (UC6)
function countContacts(count) {
    return count + 1;
}
let countContact = addressBookArray.reduce(countContacts,0);
console.log(countContact);