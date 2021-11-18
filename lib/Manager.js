//Creating Manager Class
//1. import the Employee class (extending Employee class)
const Employee = require("./Employee");

//2. create (a super) constructor, adding new properties not included in employee constructor
class Manager extends Employee {
  constructor(name, id, email, office) {
    super(name, id, email);
    this.office = office;
    this.role = "Manager";
  }
  //3. write methods associated with the class
  getOffice() {
    return this.office;
  }
}
//4. export the Manager module
module.exports = Manager;
