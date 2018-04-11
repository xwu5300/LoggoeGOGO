DROP DATABASE IF EXISTS oneTeam;


CREATE DATABASE oneTeam;

USE oneTeam;

CREATE TABLE timeStamp (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  videoId varchar(100) NOT NULL,
  studentId INT NOT NULL,
  timeStamp varchar(55) NOT NULL
);


CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name varchar(50) NOT NULL,
  owner BOOLEAN NOT NULL
);


CREATE TABLE videos (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY UNIQUE KEY,
  videoId varchar(100) NOT NULL,
  title varchar(100) NOT NULL,
  description varchar(255),
  image varchar(255),
  ownerId varchar(55) NOT NULL
);

INSERT INTO timeStamp (videoId, studentId, timeStamp) VALUES ('Cxy88GeEAxg', 1, '132');

INSERT INTO users (name, owner) VALUES ('Jun Yoo', TRUE);

INSERT INTO videos (videoId, title, ownerId) VALUES ('Cxy88GeEAxg', 'Minions', 1)