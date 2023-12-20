const inquirer = require("inquirer");
const mysql = require("mysql2");
const dotenv = require('dotenv');
dotenv.config();

async function connectToDatabase() {
  try {
      const connection = await mysql.createConnection({
          host: process.env.DB_HOST,
          port: process.env.DB_PORT,
          user: process.env.DB_USER,
          password: process.env.DB_PASSWORD,
          database: process.env.DB_DATABASE,
      });
      console.log("Connected to database");
  } catch (err) {
      console.error('Error connecting to the database:', err);
      process.exit(1);
  };
};

function mainMenu() {
  const { choice } = inquirer.prompt({
    name: "choice",
    type: "list",
    message: "What would you like to do?",
    choices: [
      "View all departments", viewDept(),
      "View all roles",
      "View all employees",
      "Add a department",
      "Add a role",
      "Add an employee",
      "Update an employee role",
      "Quit",
    ]})};

function viewDept() {
  db.query("SELECT id AS department_id, name AS department_name FROM department;", function (err, res) {
     err ? console.log(err) : console.table(res), startApp();
    })}

mainMenu();