INSERT INTO department (name)
VALUES ("Sales"),
       ("Engineering"),
       ("Legal"),
       ("Financing");

INSERT INTO role (title, salary, department_id)
VALUES ("Salesperson", 85000, 1),
       ("Account Manager", 125000, 4),
       ("Software Engineer", 165000, 2),
       ("Accountant", 95000, 4),
       ("Lawyer", 135000, 3),
       ("Legal Team Lead", 175000, 3),
       ("Lead Engineer", 195000, 2),
       ("Sales Manager", 145000,1);


INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES("Gary","Cooper", 8),
      ("Jon","Doe", 1, 1),
      ("Betty","Johnson", 2),
      ("Happy","Gilmore", 4, 3),
      ("Jenny","Fromtheblock", 6 ),
      ("Ben","Aflex", 5,5 ),
      ("Kimber","Gemstone", 7 ),
      ("Yogi","Bear", 3, 7 );
     
       
