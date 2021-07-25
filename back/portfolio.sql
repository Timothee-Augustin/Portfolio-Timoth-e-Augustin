drop database if exists portfolio;
create database portfolio;

use portfolio;

create table admin(
  id int NOT NULL AUTO_INCREMENT,
  login varchar(100) NOT NULL,
  password varchar(100) NOT NULL,
  PRIMARY KEY (id)
);

create table project(
  id int NOT NULL AUTO_INCREMENT,
  name varchar(100) NOT NULL,
  date text NOT NULL,
  description text,
  picture1 varchar(100) NOT NULL,
  picture2 varchar(100),
  link varchar(100),
  PRIMARY KEY (id)
);

create table techno(
  id int NOT NULL AUTO_INCREMENT,
  name varchar(100) NOT NULL,
  logo varchar(100) NOT NULL,
  PRIMARY KEY (id)
);

create table project_techno(
  project_id int NOT NULL,
  techno_id int NOT NULL,
  CONSTRAINT fk_project_techno
    FOREIGN KEY (project_id)
    REFERENCES project(id),
  CONSTRAINT fk_techno_project
    FOREIGN KEY (techno_id)
    REFERENCES techno(id)
);

create table client(
  id int NOT NULL AUTO_INCREMENT,
  name varchar(100) NOT NULL,
  PRIMARY KEY (id)
);

create table project_client(
  project_id int NOT NULL,
  client_id int NOT NULL,
  CONSTRAINT fk_project_client
    FOREIGN KEY (project_id)
    REFERENCES project(id),
  CONSTRAINT fk_client_project
    FOREIGN KEY (client_id)
    REFERENCES client(id)
);

insert into project (name, date, description, picture1, picture2, link)
  values 
    ('Reims Quizz', 'mars 2021', '1er projet à la Wild', 'Quizz1.Png', 'Quizz2.png', 'https://github.com/Timothee-Augustin/Projet-Quiz'),
    ('Insomniac - Battle Of Heroes', 'juin 2021', 'Second projet à la Wild', 'Insomniac1.Png', 'Insomniac2.png', 'https://github.com/WildCodeSchool/reims-js-2103-project2-insomniac-battle-of-heroes');
    

insert into client (name)
  values 
    ('Wild Code School');

insert into project_client (project_id, client_id)
  values 
    (1, 1),
    (2, 1);

insert into techno (name, logo)
  values
    ('HTML', 'logoHtml.png'),
    ('CSS', 'logoCss.png'),
    ('Javascript', 'logoJs.png'),
    ('ReactJS', 'logoReact.png'),
    ('NodeJS', 'logoNode.png'),
    ('MySQL', 'logoMysql.png');

insert into project_techno (project_id, techno_id)
  values
    (1, 1),
    (1, 2),
    (1, 3),
    (2, 1),
    (2, 2),
    (2, 4),
    (2, 5);
    