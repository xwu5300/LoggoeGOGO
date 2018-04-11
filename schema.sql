DROP DATABASE IF EXISTS oneTeam;


CREATE DATABASE oneTeam;

USE oneTeam;

CREATE TABLE timeStamp (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  videoId INT NOT NULL,
  studentId INT NOT NULL,
  timeStamp varchar(55) NOT NULL
);


CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name varchar(50) NOT NULL,
  owner varchar(10) NOT NULL
);


CREATE TABLE videos (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  url varchar(100) NOT NULL,
  title varchar(100) NOT NULL,
  description varchar(255),
  image varchar(255),
  ownerId varchar(55) NOT NULL
);

INSERT INTO timeStamp (videoId, studentId, timeStamp) VALUES (1, 1, '01:30');

INSERT INTO users (name, owner) VALUES ('Jun Yoo', 'true');

INSERT INTO videos (url, title, ownerId) VALUES ('https://www.youtube.com/watch?v=Cxy88GeEAxg', 'Minions', 1)