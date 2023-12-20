-- Department Tables
INSERT INTO department (name)
VALUES ("Development"),
       ("Sales"),
       ("Management"),
       ("Admin"),

-- Roles Tables
INSERT INTO role (title, salary, department_id)
VALUES  ("Dev ops", 120000, 2),
        ("Sr. dev", 150000, 3),
        ("Jr. dev", 70000, 1),
        ("Sales rep", 80000, 2),
        ("Sales lead", 120000, 2),
        ("Accountant", 100000, 4),
        ("HR", 100000, 4),
        ("Manager", 200000, 3),
        ("CEO", 300000, 3),

-- Employees Tables
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("John", "Doe", 1, 9),
       ("Jane", "Doe", 2, 9),
       ("Bob", "Smith", 3, 8),
       ("Sally", "Smith", 4, 8),
       ("Joe", "Johnson", 5, 8),
       ("Mary", "Johnson", 6, 8),
       ("Tom", "Jones", 7, 8),
       ("Sue", "Jones", 8, 9),
       ("Bill", "Williams", 9, NULL);