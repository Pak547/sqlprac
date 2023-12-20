INSERT INTO department (name)
VALUES ("Development"),
       ("Sales"),
       ("Management"),
       ("Admin");

INSERT INTO role (title, salary, department_id)
VALUES  ("Devops", 120000, 1),
        ("Sr.dev", 150000, 1),
        ("Jr.dev", 70000, 1),
        ("Sales rep", 80000, 2),
        ("Sales lead", 120000, 2),
        ("Accountant", 100000, 4),
        ("HR", 100000, 4),
        ("Manager", 200000, 3),
        ("CEO", 300000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("John", "Doe", 1, NULL),
       ("Jane", "Doe", 2, NULL),
       ("Bob", "Smith", 3, NULL),
       ("Sally", "Smith", 4, NULL),
       ("Joe", "Johnson", 5, NULL),
       ("Mary", "Johnson", 6, NULL),
       ("Tom", "Jones", 7, NULL),
       ("Sue", "Jones", 8, NULL),
       ("Bill", "Williams", 9, NULL);