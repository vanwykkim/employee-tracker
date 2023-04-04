INSERT INTO department (dept_name)
VALUES 
       ("Sales"),
       ("Engineering"),
       ("Legal"),
       ("Financing");

INSERT INTO role (title, salary, department_id)
VALUES 
       ("Salesperson", 85000, 1),
       ("Account Manager", 125000, 4),
       ("Software Engineer", 165000, 2),
       ("Accountant", 95000, 4),
       ("Lawyer", 135000, 3),
       ("Legal Team Lead", 175000, 3),
       ("Lead Engineer", 195000, 2),
       ("Sales Manager", 145000,1);


INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES ("Gary","Cooper", 8, NULL);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES ("Jon", "Doe", 1, 1);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES  ("Betty","Johnson", 2, NULL);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES ("Happy","Gilmore", 4, 3);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES ("Jenny","Fromtheblock", 6, NULL );

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES ("Ben","Aflex", 5,5 );

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES ("Kimber","Gemstone", 7, NULL );

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES ("Yogi","Bear", 3, 7 );
     
       
