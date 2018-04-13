const mysql = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  database : 'oneTeam'
});

//---------------------------------------------------------USER QUERIES
//-------------------------------------------- GET REQUESTS
const getUser = (user, callback) => {
  let query = `SELECT * FROM users WHERE name = "${user}"`;

  connection.query(query, (err, results) => {
    (err) ?
      console.error(err) :
      callback(err, results);
  });
  } 
  
  const getUserId = (user, callback) => {
    let query = `SELECT id FROM users WHERE name = "${user}"`;

    connection.query(query, (err, results) => {
      (err) ?
        console.error(err) :
        callback(results);
    });
  } 

//-------------------------------------------- SET REQUESTS
const setUser = (user, callback) => {
  var query = `INSERT IGNORE INTO users (name, owner) VALUE (?, ?);`

  connection.query(query, [user.username, user.isOwner], (err, results) => {
    (err) ?
      console.error(err) :
      callback(err, results);
  })
}

//---------------------------------------------------------VIDEO QUERIES
//-------------------------------------------- GET REQUESTS
const getAllVideos = (callback) => {
  const query = 'SELECT * FROM videos';

  connection.query(query, (err, results) => {
    (err) ?
      console.log('Did not get videos from database', err) :
      callback(results);
  });
};

const getCurrentVideo = (videoId, callback) => {
  const query = `SELECT * FROM videos WHERE videoId='${videoId}'`;

  connection.query(query, (err, results) => {
    (err) ?
      console.log('err', err) :
      callback(results);
  })
}

const getOwnerVideos = (userId, callback) => {
  const query = `SELECT * FROM videos WHERE userId='${userId}'`;

  connection.query(query, (err, results) => {
    (err) ?
      console.log('Did not get videos from database', err) :
      callback(results);
  });
};

//-------------------------------------------- POST REQUESTS
const setVideo = (video, userId, duration, callback) => {
  const query = "INSERT IGNORE INTO videos (videoId, title, description, image, userId, duration) VALUES (?, ?, ?, ?, ?, ?);";
  const values = [video.id.videoId, video.snippet.title, video.snippet.description, video.snippet.thumbnails.default.url, userId, duration];

  connection.query(query, values, (err, result) => {
    (err) ?
      console.log('Video is not saved', err) :
      callback();
  })
}

//---------------------------------------------------------TIMESTAMP QUERIES
//-------------------------------------------- GET REQUESTS
const getTimestamp = (videoId, userId, callback) => {
  const query = `SELECT timestamp FROM timeStamps WHERE videoId = '${videoId}' AND userId = '${userId}' ORDER BY timestamp asc;`

  connection.query(query, (err, results, fields) => {
    (err) ?
      console.error(err) :
      callback(results);
  })
}
const getOwnerTimestamp = (videoId, callback) => {
  const query = `SELECT timestamp, userId FROM timeStamps WHERE videoId = '${videoId}' ORDER BY timestamp asc;`;

  connection.query(query, (err, results, fields) => {
    (err) ?
      console.error(err) :
      callback(results);
  })
}

//-------------------------------------------- POST REQUESTS
const setTimestamp = ({userId, videoId, timestamp}, callback) => {
  const query = `INSERT INTO timeStamps (userId, videoId, timeStamp) VALUES (${userId}, '${videoId}', ${timestamp});`;

  connection.query(query, (err, results, fields) => {
    (err) ?
      console.error(err) :
      callback(results);
  });
};

//-------------------------------------------- DELETE REQUESTS
const deleteTimestamp = ({userId, videoId, timestamp}, callback) => {
  const query = `DELETE FROM timeStamps WHERE userId = ${userId} AND videoId = '${videoId}' AND timeStamp = ${timestamp};`

  connection.query(query, (err, results, fields) => {
    (err) ?
      console.error(err) :
      callback(results);
  })
}

  
exports.getUser = getUser;
exports.setUser = setUser;
exports.setVideo = setVideo;
exports.setTimestamp = setTimestamp;
exports.getUserId = getUserId;
exports.getTimestamp = getTimestamp;
exports.getAllVideos = getAllVideos;
exports.getOwnerVideos = getOwnerVideos;
exports.getCurrentVideo = getCurrentVideo;
exports.getOwnerTimestamp = getOwnerTimestamp;
exports.deleteTimestamp = deleteTimestamp;
