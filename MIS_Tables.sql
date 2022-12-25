create database mis;
use mis;
create table Directors(
    Id int not null AUTO_INCREMENT primary key,
    Password varchar(20),
    Description varchar(500),
    Email varchar(50));
create table Faculties
(
    Id int not null AUTO_INCREMENT primary key,
    Password varchar(20) not null,
    Name varchar(50) not null,
    Description varchar(500),
    Salary double (9,2) not null,
    ContactNumber BigInt(10),
    Email varchar(50)
);
create table Students(
       Id int not null AUTO_INCREMENT primary key,
       Password varchar(20),
       Name varchar(50),
       Age int,
       Enrolled_Course varchar(20),
       Marks int,
       Fees double (9,2) not null,
       Admission Date,
       Address varchar(50),
       Status varchar(20));
       
Create table Courses(
     Id int not null primary key,
     Name varchar(50),
     Duration varchar(20),
     Fees double(9,2) not null,
     Description varchar(500),
     StartDate Date,
     EndDate Date);
INSERT INTO Directors VALUES(1, "Director1", "Doing Ordinary Things Extra Ordinarily", "director1@gmail.com");
INSERT INTO Faculties VALUES(1, "Faculty1", "Mr. Acharya Nisarg","Having professional training experience of 10+ years in OS Technologies", 100000.00, 9874562310,"faculty1@gmail.com");
INSERT INTO Faculties VALUES(2, "Faculty2", "Mrs. Madhura Anturkar","Having professional training experience of 20+ years in Java Technologies", 100000,9874562311,"faculty2@gmail.com");
INSERT INTO Faculties VALUES(3, "Faculty3", "Mrs. Kishori","Having professional training experience of 20+ years in Web based Technologies", 100000,9874562312,"faculty3@gmail.com");
INSERT INTO Faculties VALUES(4, "Faculty4", "Mr. Vishal","Having professional training experience of 20+ years in Data Structure", 100000,9874562313,"faculty4@gmail.com");

INSERT INTO Students VALUES(1, "Student1", "Shruti Singh", 22, "PGDAC", 99 ,800000.00,'2021-09-15', "Pune", "Passed");
INSERT INTO Students VALUES(2, "Student2", "Piyush", 23, "PGDAC",96 ,800000.00,'2022-09-15', "Latur", "Ongoing");
INSERT INTO Students VALUES(3, "Student3", "Prashant", 24, "PGDBDA",99 ,800000.00,'2022-09-15', "Pune", "Ongoing");
INSERT INTO Students VALUES(4, "Student4", "Chanchal", 22, "PGDBDA",95 ,800000.00,'2022-09-15', "Indore", "Ongoing");
INSERT INTO Students VALUES(5, "Student5", "Sourav", 23, "PGDAC",94 ,800000.00,'2022-09-15', "Nagpur", "Ongoing");
INSERT INTO Students VALUES(6, "Student6", "Parth", 22, "PGDITISS",91 ,800000.00,'2022-09-15', "Nasik", "Ongoing");

INSERT INTO Courses VALUES(1, "PGDAC", "6 Months",800000.00,"The course aims to groom the students to enable them to work on current technology scenarios as well as prepare them to keep pace with the changing face of technology and the requirements of the growing IT industry.",'2022-09-15','2023-03-15' );
INSERT INTO Courses VALUES(2, "PGDBDA", "6 Months",800000.00,"The Post Graduate Diploma in Big Data Analytics (PG-DBDA) is a fulltime postgraduate course comprising of 9 Compulsory Modules and a Project.",'2022-09-15','2023-03-15' );
INSERT INTO Courses VALUES(3, "PGDITIS", "6 Months",800000.00,"The Post Graduate Diploma in IT Infrastructure,Systems and Security (PG-DITISS) is a fulltime postgraduate course comprising of 9 Compulsory Modules and a Project.",'2022-09-15','2023-03-15' );
