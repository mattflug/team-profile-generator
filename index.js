const Manager = require("./library/Manager");
const Intern = require("./library/Intern");
const Engineer = require("./library/Engineer");
let employees = [];
const inquirer = require("inquirer");
const fs = require("fs");

function createManager() {
    console.log("Welcome to Team Profile Generator")
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter name: ",
      },
      {
        type: "input",
        name: "id",
        message: "Enter Id: ",
      },
      {
        type: "input",
        name: "email",
        message: "Enter email: ",
      },
      {
        type: "input",
        name: "officenumber",
        message: "Enter office number: ",
      },
    ])
    .then((response) => {
      var newHireManager = new Manager(
        response.name,
        response.id,
        response.email,
        response.officenumber
      );
      employees.push(newHireManager);
      console.log(employees);
    });
}
createManager();
