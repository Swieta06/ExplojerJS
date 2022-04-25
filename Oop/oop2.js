class Users {
  id;
  name;
  phoneNumber;

  constructor(id, name, phoneNumber) {
    this.id = id;
    this.name = name;
    this.phoneNumber = phoneNumber;
  }

  getUserDetails() {
    console.log("id = " + this.id + "\n" + "name = " + this.name);
  }
}
const Bill = new Users(1, "Bill", "02134567");
Bill.getUserDetails();
const Bill2 = new Users(2, "Bill2", "02134567");
Bill2.getUserDetails();
