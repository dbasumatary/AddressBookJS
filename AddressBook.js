//UC1 - Create an address book contact

const nameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
const addressRegex = RegExp('^[a-zA-z0-9#,]{4,}$');
const cityStateRegex = RegExp('^[a-zA-z]{4,}$');
const zipRegex = RegExp("^[0-9]{3}\\s{0,1}[0-9]{3}$");
const phoneNumberRegex = RegExp("^[0-9]{2}\\s{1}[0-9]{10}$");
const emailRegex = RegExp("^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$");

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

    //check the patterns in all the setters
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

    getzip(){return this._zip;}
    setzip(zip){
        if (zipRegex.test(zip))
            this._zip = zip;
        else throw "ZIP is Incorrect";
    }

    getphoneNumber(){return this._phoneNumber;}
    setphoneNumber(phoneNumber){
        if (phoneNumberRegex.test(phoneNumber))
            this._phoneNumber = phoneNumber;
        else throw "PHONE NUMBER is Incorrect";
    }

    getemail(){return this._email;}
    setemail(email){
        if (emailRegex.test(email))
            this._email = email;
        else throw "EMAIL ADDRESS is Incorrect";
    }

    //convert object to string
    toString(){
        return "First Name : "+ this.firstName + "\nLast Name : "+ this.lastName + "\nAddress : "+ this.address + "\nCity : "+ this.city + "\nState : "+ 
        this.state + "\nZip Code : "+ this.zip+ "\nPhone Number : "+ this.phoneNumber + "\nEmail : "+ this.email;
    }
}

try{
    let addressBook = new AddressBook("Rahul", "Jha" , "India" , "Bangalore", "Karnataka", 231234, 634562672, "rahul_jha@ggg.comb");
    console.log(addressBook.toString());
    addressBook.setState("Gujarat");
    console.log(addressBook.toString());
}catch(e){
    console.log(e);
}
