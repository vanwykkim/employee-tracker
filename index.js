// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const mysql = require('mysql2');
//const ct = require('console.table');
const accessDatabase = require('./js/accessDatabase');


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
const addEmployee = async() =>{
  //TODO: get roles and employees arrays to add to update
  await addEmployeeQuest(roles,employees)
  .then(function(answers){
    //TODO: run function to add employee to database
      console.log("Employee, "+ answers.firstName+ " "+answers.lastName +", was entered in the database.");
      }).catch((err) => console.error(err));
      menu();
}

          
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

const addRole = async() =>{
  //TODO: departments arrays to add to update
  await addRoleQuest(departments)
  .then(function(answers){
    //TODO: run function to add Role to database
      console.log("Role "+ answers.rollName+" was entered in the database.");
      }).catch((err) => console.error(err));
      menu();
};

const addDeptQuest = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'deptName',
      message: 'What is the name of the Department you would like to add?',
    },
  ]);
};

const addDept= async() =>{
  await addDeptQuest()
  .then(function(answers){
//TODO: run function to add this to database
    console.log(answers.deptName + " Department was added to the database.");
  }).catch((err) => console.error(err));
  menu();
}

const updateEmployeeQuest = (employees, roles) => {
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
}
const updateEmployee = async() =>{
  //TODO: get employees and roles arrays to add to update
  await updateEmployeeQuest(employees, roles)
  .then(function(answers){
    //TODO: run function to add update to database
      console.log(answers.updateEmployee +" Role was updated to"+ answers.updateRole+" in the database.");
      }).catch((err) => console.error(err));
      menu();
}


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
          // TODO: make function to display employees
          console.log("List of Employees displayed");
          menu();
          break;
        case "Add Employee":
          addEmployee();
          break;
        case "Update Employee Role":
          updateEmployee();
          break;
        case "View All Roles":
          // TODO: make function to display roles
          console.log("All Roles are displayed.");
          menu();
          break;
        case "Add Role":
          addRole();
          break;
        case "View All Departments":
         // TODO: make function to display depts
          console.log("All Departments are displayed");
          menu();
          break;
        case "Add Department":
          addDept();
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





