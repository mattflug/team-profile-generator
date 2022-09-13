const Manager = require("./library/Manager");
const Intern = require("./library/Intern");
const Engineer = require("./library/Engineer");
let employees = [];
const inquirer = require("inquirer");
const fs = require("fs");
const generateHtml = require("./template");

function createManager() {
  console.log("Welcome to Team Profile Generator");
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
      engineerIntern();
    })
    .catch((err) => console.log(err));
}

function createIntern() {
  console.log("Welcome to Team Profile Generator");
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
        name: "schoolname",
        message: "Enter school name: ",
      },
    ])
    .then((response) => {
      var myIntern = new Intern(
        response.name,
        response.id,
        response.email,
        response.schoolname
      );
      employees.push(myIntern);
      console.log(employees);
      engineerIntern();
    });
}
function createEngineer() {
  console.log("Welcome to Team Profile Generator");
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
        name: "github",
        message: "Enter github",
      },
    ])
    .then((response) => {
      var myEngineer = new Engineer(
        response.name,
        response.id,
        response.email,
        response.github
      );
      employees.push(myEngineer);
      console.log(employees);
      engineerIntern();
    });
}

function engineerIntern() {
  console.log("is this working?");
  inquirer
    .prompt([
      {
        type: "list",
        name: "option",
        choices: ["Add Engineer", "Add Intern", "Exit app"],
        message: "Enter name: ",
      },
    ])
    .then((response) => {
      switch (response.option) {
        case "Add Engineer":
          createEngineer();
          break;
        case "Add Intern":
          createIntern();
          break;
        default:
          exitApp();
      }
    });
}

function exitApp() {
  var html = generateHtml(employees);
  fs.writeFile("results.html", html, function () {
    console.log("html sucess");
  });
}

createManager();
