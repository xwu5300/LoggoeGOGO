DROP DATABASE IF EXISTS oneTeam;


CREATE DATABASE oneTeam;

USE oneTeam;

CREATE TABLE timeStamp (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  videoId varchar(255) NOT NULL,
  studentId INT NOT NULL,
  timeStamp varchar(255) NOT NULL
);


CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name varchar(255) NOT NULL,
  owner BOOLEAN NOT NULL
);


CREATE TABLE videos (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  videoId varchar(255) NOT NULL UNIQUE KEY,
  title varchar(255) NOT NULL,
  description varchar(255),
  image varchar(255),
  ownerId INT(11) NOT NULL
);

INSERT INTO timeStamp (videoId, studentId, timeStamp) VALUES (1, 1, '01:30');

INSERT INTO users (name, owner) VALUES ('Jun Yoo', true);

INSERT INTO videos (videoId, title, ownerId) VALUES ('8o5Cmfpeo6g', 'Lec 6 | MIT 18.06 Linear Algebra, Spring 2005', 1);