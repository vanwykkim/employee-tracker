// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const mysql = require('mysql2');
//const ct = require('console.table');
const accessDatabase = require('./js/accessDatabase');
const express = require('express');


//Express middleware
const PORT = process.env.PORT || 3001;
const app = express();

// Connect to database
// const db = mysql.createConnection(
//   {
//     host: 'localhost',
//     // MySQL username,
//     user: 'root',
//     // TODO: Add MySQL password here
//     password: '',
//     database: 'movies_db'
//   },
//   console.log(`Connected to the tracker_db database.`)
// );

//make a createDatabse object
const aDB = new accessDatabase();

const startQuestion = () => {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'menuChoice',
      message: 'What would you like to do?',
      choices:["View All Employees","Add Employee","Update Employee Role","View All Roles", "Add Role", "View All Departments","Add Department","Quit"],
      default: 0,
    },
  ]);
};

const addEmployeeQuest = (roles,employees) => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'firstName',
      message: 'What is the first name of the employee(0-30 char)?',
    },
    {
      type: 'input',
      name: 'lastName',
      message: 'What is the last name of the employee(0-30 char)?',
    },
    {
      type: 'list',
      name: 'employeeRole',
      message: 'What is the employee\'s role?',
      choices:[roles],
    },
    {
      type: 'list',
      name: 'manager',
      message: 'Who is the employee\'s manager?',
      choices:[employees],
    },
  ]);
};
const addRoleQuest = (departments) => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'rollName',
      message: 'What is the Role you would like to add?',
    },
    {
      type: 'number',
      name: 'salary',
      message: 'What is the salary for this Role? $',
    },
    {
      type: 'list',
      name: 'departmentID',
      message: 'What Department does this Role belong to?',
      choices:[departments],
    },
  ]);
};
const addDeptQuest = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'deptName',
      message: 'What is the name of the Department you wouldd like to add?',
    },
  ]);
};


const updateEmployee = (employees, roles) => {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'updateEmployee',
      message: 'Which Employee would you like to update?',
      choices:[employees],
    },
    {
      type: 'list',
      name: 'updateRole',
      message: 'What is the Employee\'s new role?',
      choices:[roles],
    },
  ]);
};


  //   {
  //     type: 'confirm',
  //     name: 'license',
  //     message: 'Did you use a license in your github repo?',
  //     default: false,
  //   },

  
 


// Use writeFileSync method to use promises instead of a callback function

// Bonus using writeFileSync as a promise
// const init = () => {
//   questions()
//     // Use writeFile method imported from fs.promises to use promises instead of
//     // a callback function
//    // .then(function(answers){console.log("this is the answers "+answers.title+" "+ answers.description);})
//     .then((answers) => {writeFile('README.md', gMD.generateMarkdownTitle(answers.title, answers.description, answers.installation, answers.usage, answers.contributing, answers.test, answers.username, answers.repo, answers.email, answers.license)); appendFile('README.md', gMD.generateMarkdownLicense(answers.license, answers.username, answers.repo));})
//     .then(() => console.log('Successfully wrote to README.md'))
//     .catch((err) => console.error(err));
// };

const menu = () => {
  startQuestion()
  //   // Use writeFile ;method imported from fs.promises to use promises instead of
  //   // a callback function
   .then(function(answers){
      switch(answers.menuChoice){
        case "Quit":
          console.log("Thanks for using the Employee Tracker Database");
          break;
        case "View All Employees":
          console.log("List of Employees displayed");
          menu();
          break;
        case "Add Employee":
          console.log("An employee was added to the database");
          menu();
          break;
        case "Update Employee Role":
          console.log("Employee\'s Role was updated in the database.");
          menu();
          break;
        case "View All Roles":
          console.log("All Roles are displayed.");
          menu();
          break;
        case "Add Role":
          console.log("A Role has been added to the database.");
          menu();
          break;
        case "View All Departments":
          console.log("All Departments are displayed");
          menu();
          break;
        case "Add Department ":
          console.log("A Department was added to the database.");
          menu();
          break;
      }
    })
  //   .then(put function here to use this)
    .catch((err) => console.error(err));
  }

const init = () => {
// ,----------------------------------------------------------------.
// |                                                                |
// |    _____                 _                                     |
// |   | ____|_ __ ___  _ __ | | ___  _   _  ___  ___               |
// |   |  _| | '_ \ _ \| '_\ | |/ _ \| | | |/ _ \/ _ \              |
// |   | |___| | | | | | |_) | | (_) | | | |  __/  __/              |
// |   |_____|_| |_| | | .__/|_|\___/\__,  |\___|\___|              |
// |                   |_|            |___/                         |
// |    __  __                                       ____  ____     |
// |   |  \/  | __ _ _ __  __  _  __ _  ___ _ __    |  _ \|    \    |
// |   | |\/| |/ _' | '_ \/  _' |/ _' |/ _ \ '__|   | | \ | |> /    |
// |   | |  | | (_| | | | | (_| | (_| |  __/ |      | |_/ | |> \    |
// |   |_|  |_|\__,_|_| |_|\__,_|\__, |\___|_|      |____/|____/    |
// |                             |___/                              |
// |                                                                |
// !----------------------------------------------------------------.
  console.log(",----------------------------------------------------------------.");
  console.log("|                                                                |");
  console.log("|    _____                 _                                     |");
  console.log("|   | ____|_ __ ___  _ __ | | ___  _   _  ___  ___               |");
  console.log("|   |  _| | '_ \\ _ \\| '_\\ | |/ _ \\| | | |/ _ \\/ _ \\              |");
  console.log("|   | |___| | | | | | |_) | | (_) | |_| |  __/  __/              |");
  console.log("|   |_____|_| |_| | | .__/|_|\\___/\\__,  |\\___|\\___|              |");
  console.log("|                   |_|            |___/                         |");
  console.log("|    __  __                                       ____  ____     |");
  console.log("|   |  \\/  | __ _ _ __   __ _  __ _  ___ _ __    |  _ \\|    \\    |");
  console.log("|   | |\\/| |/ _' | '_ \\/   ' |/ _' |/ _ \\ '__|   | | \\ | |> /    |");
  console.log("|   | |  | | (_| | | | | (_| | (_| |  __/ |      | |_/ | |> \\    |");
  console.log("|   |_|  |_|\\__,_|_| |_|\\__,_|\\__, |\\___|_|      |____/|____/    |");
  console.log("|                             |___/                              |");
  console.log("|                                                                |");
  console.log("!----------------------------------------------------------------.");

  menu();
  
};
init();





