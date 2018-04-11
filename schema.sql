DROP DATABASE IF EXISTS oneTeam;


CREATE DATABASE oneTeam;

USE oneTeam;

CREATE TABLE timeStamp (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
<<<<<<< HEAD
  videoId varchar(100) NOT NULL,
=======
  videoId varchar(255) NOT NULL,
>>>>>>> vanessa
  studentId INT NOT NULL,
  timeStamp varchar(255) NOT NULL
);


CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
<<<<<<< HEAD
  name varchar(50) NOT NULL,
=======
  name varchar(255) NOT NULL,
>>>>>>> vanessa
  owner BOOLEAN NOT NULL
);


CREATE TABLE videos (
<<<<<<< HEAD
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY UNIQUE KEY,
  videoId varchar(100) NOT NULL,
  title varchar(100) NOT NULL,
=======
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  videoId varchar(255) NOT NULL UNIQUE KEY,
  title varchar(255) NOT NULL,
>>>>>>> vanessa
  description varchar(255),
  image varchar(255),
  ownerId INT(11) NOT NULL
);

INSERT INTO timeStamp (videoId, studentId, timeStamp) VALUES ('Cxy88GeEAxg', 1, '132');

<<<<<<< HEAD
INSERT INTO users (name, owner) VALUES ('Jun Yoo', TRUE);

INSERT INTO videos (videoId, title, ownerId) VALUES ('Cxy88GeEAxg', 'Minions', 1)
=======
INSERT INTO users (name, owner) VALUES ('Jun Yoo', true);

INSERT INTO videos (videoId, title, ownerId) VALUES ('8o5Cmfpeo6g', 'Lec 6 | MIT 18.06 Linear Algebra, Spring 2005', 1);
>>>>>>> vanessa
