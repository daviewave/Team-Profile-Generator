//Creating employee class
//1. Set up contructor with relevant properties created and set
class Employee {
  constructor(name, id, email, role) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.role = role;
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