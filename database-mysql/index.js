const mysql = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  database : 'oneTeam'
});
const saveUser =(user) => {
}
// add users later
const saveVideo = (video, userId, duration, callback) => {
  const sql = "insert ignore into videos (videoId, title, description, image, userId, duration) values (?, ?, ?, ?, ?, ?);";
  const values = [video.id.videoId, video.snippet.title, video.snippet.description, video.snippet.thumbnails.default.url, userId, duration];
  connection.query(sql, values, (err, result) => {
    if (err) {
      console.log('Video is not saved', err)
    } else {
      callback();
    }
  })
}
const selectAllVideos = function(callback) {
  connection.query('SELECT * FROM videos', function(err, results) {
    if(err) {
      console.log('Did not get videos from database', err);
    } else {
      callback(results);
    }
  });
};
const selectCurrentVideo = function(videoId, callback) {
  connection.query(`SELECT * FROM videos WHERE videoId='${videoId}'`, function(err, result) {
    if(err) {
      console.log('err', err)
    } else {
      callback(result);
    }
  })
}
const selectOwnerVideos = function(userId, callback) {
  connection.query(`SELECT * FROM videos WHERE userId='${userId}'`, function(err, results) {
    if(err) {
      console.log('Did not get videos from database', err);
    } else {
      callback(results);
    }
  });
};

const retrieveTimestamp = function(videoId, userId, callback) {
  connection.query(`SELECT timestamp FROM timeStamps WHERE videoId = '${videoId}' AND userId = '${userId}' ORDER BY timestamp asc;`, function(err, results, fields) {
    if(err) {
      console.error(err);
    } else {
      callback(results);
    }
  })
}
const retrieveOwnerTimestamp = function(videoId, callback) {
  connection.query(`SELECT timestamp, userId FROM timeStamps WHERE videoId = '${videoId}' ORDER BY timestamp asc;`, function(err, results, fields) {
    if(err) {
      console.error(err);
    } else {
      callback(results);
    }
  })
}
const saveTimestamp = function({userId, videoId, timestamp}, callback) {
  connection.query(`INSERT INTO timeStamps (userId, videoId, timeStamp) VALUES (${userId}, '${videoId}', ${timestamp});`, function(err, results, fields) {
    if(err) {
      console.error(err);
    } else {
      // console.log(studentId, videoId, timestamp)
      callback(results);
    }
  });
};

const deleteTimestamp = function({userId, videoId, timestamp}, callback) {
  connection.query(`DELETE FROM timeStamps WHERE userId = ${userId} AND videoId = '${videoId}' AND timeStamp = ${timestamp};`, function(err, results, fields) {
    if (err) {
      console.error(err);
    } else {
      // console.log(studentId, videoId, timestamp)
      callback(results);
    }
  })
}

// selecting all users from database
const selectAllUsers = (user, callback) => {
    // console.log(user);
    connection.query(`SELECT * FROM users where name = "${user}"`, function(err, results) {
    if (err) throw err;
    // console.log('data', results)
    callback(err, results)
    });
  } 
  
  const retrieveUserId = (user, callback) => {
    // console.log(user);
    connection.query(`SELECT id FROM users where name = "${user}"`, function(err, results) {
      if (err) {
        console.error(err);
      } else {
        callback(results)
      }
    });
  } 
  
  // inserting owner into database;
  const insertOwner = (user, callback) => {
    var queryString = `INSERT IGNORE INTO users (name, owner) VALUES (?, ?);`
      // console.log('user in server', user);
      connection.query(queryString, [user.username, true], function(err, results) {
        if (err) throw err;
        callback(err, results);
      });
    }
    
  
  // inserting student into database;
  const insertStudent = (user, callback) => {
    var queryString = `INSERT IGNORE INTO users (name, owner) VALUES (?, ?);`
    // console.log('user in server', user);
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
exports.deleteTimestamp = deleteTimestamp;
exports.selectAllVideos = selectAllVideos;
exports.retrieveUserId = retrieveUserId;
exports.selectOwnerVideos = selectOwnerVideos;
exports.selectCurrentVideo = selectCurrentVideo;
exports.retrieveOwnerTimestamp = retrieveOwnerTimestamp;