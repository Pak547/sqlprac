const mysql = require("mysql2");
const dotenv = require('dotenv');
const inquirer = require("inquirer");
dotenv.config();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
},
  console.log(`Connected to the employee database.`)
);

async function mainMenu() {
   await inquirer.prompt({
    name: "choice",
    type: "list",
    message: "What would you like to do?",
    choices: [
      "View all departments",
      "View all roles",
      "View all employees",
      "Add a department",
      "Add a role",
      "Add an employee",
      "Update an employee role",
      "Quit",
    ]
  }).then((input) => {
    switch (input.choice) {
      case "View all departments":
        viewDept();
        break;
      case "View all roles":
        viewRoles();
        break;
      case "View all employees":
        viewEmployees();
        break;
      case "Add a new department":
        addDept();
        break;
      case "Add a new role":
        addRole();
        break;
      case "Add an employee":
        addEmployee();
        break;
      case "Update an employee role":
        updateEmployeeRole();
        break;
      case "Quit":
        startApp();
        break;
    }
  })
};

function viewDept() {
  db.query("SELECT id AS department_id, name AS department_name FROM department;", function (err, res) {
    // ternary operator
    err ? console.log(err) : console.table(res), startApp();
  })
}
function viewRoles() {
  db.query("SELECT id AS role_id, title, salary, department_id FROM role;", function (err, res) {
    err ? console.log(err) : console.table(res), startApp();
  })
}

function viewEmployees() {
  db.query("SELECT id AS employee_id, first_name, last_name, role_id, manager_id FROM employee;", function (err, res) {
    err ? console.log(err) : console.table(res), startApp();
  })
}
function addDept() {
  inquirer.prompt({
    name: "department_name",
    type: "input",
    message: "What is the name of the department you would like to add?",
  }).then(function (answer) {
    db.query("INSERT INTO department (name) VALUES (?)", [answer.department_name], function (err, res) {
      err ? console.log(err) : console.table(res), startApp();
    })
  })
}
function addRole() {
  inquirer.prompt([{
    name: "title",
    type: "input",
    message: "What is the title of the role you would like to add?",
  },
  {
    name: "salary",
    type: "input",
    message: "What is the salary of the role you would like to add?",
  },
  {
    name: "department_id",
    type: "input",
    message: "What is the department id of the role you would like to add?",
  }]).then(function (answer) {
    db.query("INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)", [answer.title, answer.salary, answer.department_id], function (err, res) {
      err ? console.log(err) : console.table(res), startApp();
    })
  })
}
function addEmployee() {
  inquirer.prompt([{
    name: "first_name",
    type: "input",
    message: "What is the first name of the employee you would like to add?",
  },

  {
    name: "last_name",
    type: "input",
    message: "What is the last name of the employee you would like to add?",
  },

  {
    name: "role_id",
    type: "input",
    message: "What is the role id of the employee you would like to add?",
  },

  {
    name: "manager_id",
    type: "input",
    message: "What is the manager id of the employee you would like to add?",
  }]).then(function (answer) {

    db.query("INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)", [answer.first_name, answer.last_name, answer.role_id, answer.manager_id], function (err, res) {
      err ? console.log(err) : console.table(res), startApp();
    }
    )
  }
  )
}
function updateEmployeeRole() {
  inquirer.prompt([{
    name: "employee_id",
    type: "input",
    message: "What is the id of the employee whose role you would like to update?",
  },
  {
    name: "role_id",
    type: "input",
    message: "What is the new role id of the employee?",
  }]).then(function (answer) {
    db.query("UPDATE employee SET role_id = ? WHERE id = ?", [answer.role_id, answer.employee_id], function (err, res) {
      err ? console.log(err) : console.table(res), startApp();
    })
  })
}
function quit() {
  db.end();
  process.exit();
}
function startApp() {
  inquirer.prompt({
    name: "start",
    type: "list",
    message: "Would you like to return to the main menu?",
    choices: ["Yes", "No"],
  }).then(function (answer) {
    if (answer.start === "Yes") {
      mainMenu();
    } else {
      quit();
    }
  })
}

mainMenu();