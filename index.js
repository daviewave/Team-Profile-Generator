//IMPORT REQUIRED MODULES
const fs = require("fs");
const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");


//DATA
const allEmployees = []; //array to store user input
const employeePrompts = [
    {
        type: "input",
        name: "name",
        message: "Enter New Employee's Name: ",
        validate: function (newName) {
            if (newName) {
                return true;
            } else {
                return 'ERROR: ENTER NEW EMPLOYEES NAME';
            }
        }
    },
    {
        type: "input",
        name: "id",
        message: "Enter New Employee's ID: ",
        validate: function (newID) {
            if (newID) {
                return true;
            } else {
                return 'ERROR: ENTER NEW EMPLOYEES ID';
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "Enter New Employee's Email Address: ",
        validate: function (newEmail) {
            if (newEmail) {
                return true;
            } else {
                return 'ERROR: ENTER NEW EMPLOYEES ID';
            }
        }
    },
    {
        type: "list",
        name: "role",
        message: "Enter New Employee's Role at the Company: ",
        choices: ["Engineer", "Intern", "Manager"]
    },
]

//FUNCTIONS
function enterNewEmployee(){
    inquirer.prompt(employeePrompts);
}

enterNewEmployee();