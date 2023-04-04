// TODO: Include packages needed for this application
const inquirer = require('inquirer');
require('console.table');
// Import and require mysql2
const mysql = require('mysql2');
require("dotenv").config();

const db = mysql.createConnection(
  {
    host: "localhost",
    // MySQL username,
    user: process.env.DB_USER,
    // TODO: Add MySQL password here
    password: process.env.DB_PASSWORD,
    database: "employee_manager_db",
  },
  console.log(`Connected to the employee_manager_db database.`)
);

const utils = require("util");
db.query = utils.promisify(db.query);

const viewAllEmployees = async () => {
const sql = `SELECT employee.id, employee.first_name AS "first name", employee.last_name 
                    AS "last name", role.title, department.dept_name AS department, role.salary, 
                    concat(manager.first_name, " ", manager.last_name) AS manager
                    FROM employee
                    LEFT JOIN role
                    ON employee.role_id = role.id
                    LEFT JOIN department
                    ON role.department_id = department.id
                    LEFT JOIN employee manager
                    ON manager.id = employee.manager_id`;

  const results = await db.query(sql);
  console.table(results);
  menu();
};

const viewAllDepartments = async () => {
  const sql = `SELECT department.id, department.dept_name AS "department" from department`;
  const results = await db.query(sql);
  console.table(results);
  menu();
};


const viewAllRoles = async () => {
  const sql = `SELECT role.id, role.title, department.dept_name AS "department" FROM role LEFT JOIN department ON role.department_id = department.id`;
  const results = await db.query(sql);
  console.table(results);
  menu();
};

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
      name: 'roleId',
      message: 'What is the employee\'s role?',
      choices: roles,
    },
    {
      type: 'list',
      name: 'managerId',
      message: 'Who is the employee\'s manager?',
      choices: employees,
    },
  ]);
};
const addEmployee = async() =>{
  try {
      //TODO: get roles and employees arrays to add to update
  const roles = await db.query('SELECT id as value, title as name FROM role');
   const employees = await db.query("SELECT id as value, concat(first_name, ' ', last_name) as name FROM employee");
  const answers = await addEmployeeQuest(roles,employees)
  //TODO: run function to add employee to database
  await db.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)',[answers.firstName, answers.lastName, answers.roleId, answers.managerId]);
    console.log("Employee, "+ answers.firstName+ " "+answers.lastName +", was entered in the database.");
     menu();
  } catch (error) {
    console.log("error");
  }
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
          viewAllEmployees();    
          break;
        case "Add Employee":
          addEmployee();
          break;
        case "Update Employee Role":
          updateEmployee();
          break;
        case "View All Roles":
          // TODO: make function to display roles
          viewAllRoles();
          break;
        case "Add Role":
          addRole();
          break;
        case "View All Departments":
         viewAllDepartments();
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





