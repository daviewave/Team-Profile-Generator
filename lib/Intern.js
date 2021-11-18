//Creating Intern Class
//1. import the Employee class (extending Employee class)
const Employee = require("./Employee");

//2. create (a super) constructor, adding new properties not included in employee constructor
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
    this.role = "Intern";
  }
  //3. write methods associated with the class
  getSchool() {
    return this.school;
  }
}
//4. export the Intern module
module.exports = Intern;
