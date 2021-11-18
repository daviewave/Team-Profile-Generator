//Creating employee class
//1. Set up contructor with relevant properties created and set
class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = "Employee";
  }

  //2. Write any methods associated with employee class
  getName() {
    return this.name;
  }
  getID() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getRole() {
    return this.role;
  }
}
//3. Export the module
module.exports = Employee;