DROP DATABASE IF EXISTS oneTeam;


CREATE DATABASE oneTeam;

USE oneTeam;

CREATE TABLE timeStamp (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  videoId varchar(255) NOT NULL,
  studentId INT NOT NULL,
  timeStamp INT(11) NOT NULL
);


CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name varchar(255) NOT NULL UNIQUE KEY,
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

INSERT INTO timeStamp (videoId, studentId, timeStamp) VALUES ('Cxy88GeEAxg', 1, '132');

INSERT INTO users (name, owner) VALUES ('Jun Yoo', TRUE);

INSERT INTO videos (videoId, title, ownerId) VALUES ('Cxy88GeEAxg', 'Minions', 1)
