create database mis;

use mis;


create table Director(
    Id int not null AUTO_INCREMENT primary key,
    Password varchar(20),
    Description varchar(500),
    Email varchar(50));


create table Faculty(
     Id int not null AUTO_INCREMENT primary key,
     Password not null varchar(20),
     Name not null varchar(50),
     Description varchar(500),
     Experience int,
     Expertise varchar(50),
     Salary float,
     ContactNumber varchar(10)
     Email varchar(50));


create table Student(
       Id int not null AUTO_INCREMENT primary key,
       pwd varchar(20),
       name varchar(50),
       Age int,
       Course varchar(20),
       Fee float,
       Admission Date,
       Address varchar(50));

Create table Course(
     Id int primary key,
     Name varchar(50),
     Duration varchar(20),
     Fees int,
     Description varchar(50),
     StartDate Date,
EndDate Date);