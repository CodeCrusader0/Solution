mysql> Select *
    -> from Director;
+-----+------+
| Did | Dpwd |
+-----+------+
|   1 | pwd  |
+-----+------+
1 row in set (0.00 sec)


mysql> Create table student(
    -> S_id int primary key,
    -> S_name varchar(50),
    -> S_Age int,
    -> S_Course varchar(20),
    -> S_City varchar(20));
Query OK, 0 rows affected (0.40 sec)

mysql> insert into student values (1, "Shruti", 22, "PGDAC", "Pune");
Query OK, 1 row affected (0.07 sec)

mysql> insert into student values (2, "Chanchal", 22, "PGDAC", "Pune");
Query OK, 1 row affected (0.07 sec)

mysql> insert into student values (3, "Saurabh", 22, "PGDAC", "Pune");
Query OK, 1 row affected (0.07 sec)

mysql> insert into student values (4, "Prashant", 22, "PGDAC", "Pune");
Query OK, 1 row affected (0.06 sec)

mysql> Select *
    -> from Student;
+------+----------+-------+----------+--------+
| S_id | S_name   | S_Age | S_Course | S_City |
+------+----------+-------+----------+--------+
|    1 | Shruti   |    22 | PGDAC    | Pune   |
|    2 | Chanchal |    22 | PGDAC    | Pune   |
|    3 | Saurabh  |    22 | PGDAC    | Pune   |
|    4 | Prashant |    22 | PGDAC    | Pune   |
+------+----------+-------+----------+--------+
4 rows in set (0.00 sec)




mysql> Create table faculty(
    -> F_id int primary key,
    -> F_name varchar(50),
    -> F_SME varchar(20),
    -> F_Exp int);
Query OK, 0 rows affected (0.32 sec)

mysql> insert into faculty values (1, "Mr. Ravi Tambade", "Software Engineering", 25);
Query OK, 1 row affected (0.07 sec)

mysql> insert into faculty values (2, "Mrs. Madhura Anturkar", "Java", 20);
Query OK, 1 row affected (0.07 sec)

mysql> insert into faculty values (3, "Mrs. Kishori Khadilkar", "Database Technologies", 25);
ERROR 1406 (22001): Data too long for column 'F_SME' at row 1
mysql> insert into faculty values (3, "Mrs. Kishori Khadilkar", "Database System", 25);
Query OK, 1 row affected (0.12 sec)

mysql> insert into faculty values (4, "Mrs. Nisarg Acharya", "Operating System", 10);
Query OK, 1 row affected (0.06 sec)

mysql> Select *
    -> from faculty;
+------+------------------------+----------------------+-------+
| F_id | F_name                 | F_SME                | F_Exp |
+------+------------------------+----------------------+-------+
|    1 | Mr. Ravi Tambade       | Software Engineering |    25 |
|    2 | Mrs. Madhura Anturkar  | Java                 |    20 |
|    3 | Mrs. Kishori Khadilkar | Database System      |    25 |
|    4 | Mrs. Nisarg Acharya    | Operating System     |    10 |
+------+------------------------+----------------------+-------+
4 rows in set (0.00 sec)