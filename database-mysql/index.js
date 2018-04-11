const mysql = require('mysql');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  database : 'oneTeam'
});

const retrieveTimestamp = function(callback) {
  connection.query('SELECT * FROM timeStamp;', function(err, results, fields) {
    if(err) {
      console.error(err);
    }
  })
}

const saveUser =(user) => {

}

// add users later
const saveVideo = (video, callback) => {
  const sql = "insert ignore into videos (videoId, title, description, image, ownerId) values (?, ?, ?, ?, ?);";
  const values = [video.id.videoId, video.snippet.title, video.snippet.description, video.snippet.thumbnails.default.url, 1];
  connection.query(sql, values, (err, result) => {
    if (err) {
      console.log('Video is not saved', err)
    } else {
      callback();
    }
  })
}

const selectAll = function(callback) {
  connection.query('SELECT * FROM videos', function(err, results) {
    if(err) {
      console.log('Did not get videos from database', err);
    } else {
      callback(results);
    }
  });
};


const saveTimestamp = function({studentId, videoId, timestamp}, callback) {
  connection.query(`INSERT INTO timeStamp (studentId, videoId, timeStamp) VALUES (${studentId}, '${videoId}', ${timestamp});`, function(err, results, fields) {
    if(err) {
      console.error(err);
    } else {
      console.log(studentId, videoId, timestamp)
      callback();
    }
  });
};



// selecting all users from database
const selectAllUsers = (callback) => {
    connection.query('SELECT * FROM users', function(err, results) {
    if (err) throw err;
    console.log('data', results)
    callback(err, results)
    });
  } 
  
  
  // inserting owner into database;
  const insertOwner = (user, callback) => {
    var queryString = `INSERT IGNORE INTO users (name, owner) VALUES (?, ?);`
      console.log('user in server', user);
      connection.query(queryString, [user.username, true], function(err, results) {
        if (err) throw err;
        callback(err, results);
      });
    }
    
  
  // inserting student into database;
  const insertStudent = (user, callback) => {
    var queryString = `INSERT IGNORE INTO users (name, owner) VALUES (?, ?);`
    console.log('user in server', user);
    connection.query(queryString, [user.username, false], function(err, results) {
      if (err) throw err;
      callback(err, results);
    });
  }
  
  
  
  
  
exports.selectAllUsers = selectAllUsers;
exports.insertStudent = insertStudent;
exports.insertOwner = insertOwner;

exports.retrieveTimestamp = retrieveTimestamp;
exports.saveTimestamp = saveTimestamp;
exports.saveVideo = saveVideo;
exports.saveUser = saveUser;
exports.selectAll = selectAll;