//IMPORT REQUIRED MODULES
const fs = require("fs");
const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const generateFramework = require("./src/html-framework");
const generateHTML = require("./html-generator");

//DATA
const companyEmployees = []; //array to store user input

const employeePrompts = [
  {
    type: "input",
    name: "name",
    message: "Enter New Employee's Name: ",
    validate: function (newName) {
      if (newName) {
        return true;
      } else {
        return "ERROR: ENTER NEW EMPLOYEES NAME";
      }
    },
  },
  {
    type: "input",
    name: "id",
    message: "Enter New Employee's ID: ",
    validate: function (newID) {
      if (newID) {
        return true;
      } else {
        return "ERROR: ENTER NEW EMPLOYEES ID";
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "Enter New Employee's Email Address: ",
    validate: function (newEmail) {
      if (newEmail) {
        return true;
      } else {
        return "ERROR: ENTER NEW EMPLOYEES ID";
      }
    },
  },
  {
    type: "list",
    name: "role",
    message: "Enter New Employee's Role at the Company: ",
    choices: ["Engineer", "Intern", "Manager"],
  },
];
const engineerPrompt = [
  {
    type: "input",
    name: "github",
    message: "Enter Github Username: ",
    validate: (githubName) => {
      if (githubName) {
        return true;
      } else {
        return "ERROR: ENTER A VALID GITHUB ACCOUNT";
      }
    },
  },
];
const internPrompt = [
  {
    type: "input",
    name: "school",
    message: "Enter school attending/attended: ",
    validate: (curSchool) => {
      if (curSchool) {
        return true;
      } else {
        return "ERROR: ENTER A VALID OFFICE NUMBER";
      }
    },
  },
];
const managerPrompt = [
  {
    type: "input",
    name: "office",
    message: "Enter office number: ",
    validate: (officeNumber) => {
      if (officeNumber) {
        return true;
      } else {
        return "ERROR: ENTER A VALID OFFICE NUMBER";
      }
    },
  },
];
const addAnotherPrompt = [
  {
    type: "confirm",
    name: "add",
    message: "Would you like to add another Employee?",
  },
];

//FUNCTIONS
function enterNewEmployee() {
  inquirer.prompt(employeePrompts).then((employee) => {
    //Goes route of adding an engineer employee
    if (employee.role === "Engineer") {
      inquirer.prompt(engineerPrompt).then((answer) => {
        const newEngineer = new Engineer(
          employee.name,
          employee.id,
          employee.name,
          answer.github
        );
        console.log(newEngineer);
        companyEmployees.push(newEngineer);
        addAnotherEmployee();
      });
    } //Goes route of adding an Intern employee
    else if (employee.role === "Intern") {
      inquirer.prompt(internPrompt).then((answer) => {
        const newIntern = new Intern(
          employee.name,
          employee.id,
          employee.name,
          answer.school
        );
        console.log(newIntern);
        companyEmployees.push(newIntern);
        addAnotherEmployee();
      });
    }
    //Goes route of adding an Manager employee
    else {
      inquirer.prompt(managerPrompt).then((answer) => {
        const newManager = new Manager(
          employee.name,
          employee.id,
          employee.name,
          answer.office
        );
        console.log(newManager);
        companyEmployees.push(newManager);
        addAnotherEmployee();
      });
    }
  });
}

function addAnotherEmployee() {
  inquirer.prompt(addAnotherPrompt).then((answer) => {
    if (answer.add === true) {
      enterNewEmployee();
    } else {
      console.log("LIST OF COMPANY EMPLOYEES: ");
      console.log(companyEmployees);
      //Call functions to create the html file
      let createEmployeeCards = generateFramework(companyEmployees);
      generateHTML(createEmployeeCards);
    }
  });
}

enterNewEmployee();