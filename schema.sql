//updated dummy data
DROP DATABASE IF EXISTS oneTeam;
CREATE DATABASE oneTeam;
USE oneTeam;
CREATE TABLE timeStamps (
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
INSERT INTO timeStamps (videoId, studentId, timeStamp) VALUES ('ZK3O402wf1c', 1, 132);
INSERT IGNORE INTO users (name, owner) VALUES ('Jun Yoo', true);
INSERT IGNORE INTO videos (videoId, title, ownerId, description, image) VALUES ('ZK3O402wf1c', 'Lec 1 | MIT 18.06 Linear Algebra, Spring 2005', 1, 'Lecture 1: The Geometry of Linear Equations. View …e information at http://ocw.mit.edu/terms More...', 'https://i.ytimg.com/vi/ZK3O402wf1c/default.jpg');