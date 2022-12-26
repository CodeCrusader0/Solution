create table Director
(
    Dir_id  int not null AUTO_INCREMENT primary key,
    password varchar(20),
    Description varchar(500),
    email varchar(50)  
);
create table Faculties
(
    Fac_ID int not null AUTO_INCREMENT primary key,
    password not null varchar(20),
    Name not null varchar(20),
    Experience int,
    Expertise varchar(100),
    Salary decimal(9,2),
    contactDetails varchar(20),
    email varchar(50),
    Fid int,

    foreign key (Fid) references Faculties(Fac_ID)


);
create table Students
(
    Stud_Id  int primary key AUTO_INCREMENT,
    pwd varchar(50),
    name varchar(50),
    age int not null,
    fees decimal(9,2) not null,
    AdmissionDate DATE,
    cid int,
     foreign key (cid)  references Courses(Course_Id) on delete cascade on update cascade   
);
create table Courses
(
    Course_Id int  primary key,
    Name varchar(50),
    Duration varchar(20),
    Fees decimal(9,2),
    Description varchar(50),
    StartDate DATE,
    EndDate Date


);
