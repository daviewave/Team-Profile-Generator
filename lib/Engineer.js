//Creating Engineer Class
//1. import the Employee class (extending Employee class)
const Employee = require("./Employee");

//2. create (a super) constructor, adding new properties not included in employee constructor
class Engineer extends Employee{
    constructor(name, id, email, github){
        super(name, id, email){
            this.github = github;
            this.role = "Engineer";
        }
    }
    //3. write methods associated with the class
    getGithub(){
        return this.github;
    }
}
//4. export the engieer module
module.exports = Engineer;
