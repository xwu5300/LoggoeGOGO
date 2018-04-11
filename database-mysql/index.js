const mysql = require('mysql');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  database : 'oneTeam'
});

const retrieveTimestamp = function(videoId, callback) {
  console.log(videoId)
  connection.query(`SELECT timestamp FROM timeStamps WHERE videoId = '${videoId}' ORDER BY timestamp asc;`, function(err, results, fields) {
    if(err) {
      console.error(err);
    } else {
      callback(results);
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
  connection.query(`INSERT INTO timeStamps (studentId, videoId, timeStamp) VALUES (${studentId}, '${videoId}', ${timestamp});`, function(err, results, fields) {
    if(err) {
      console.error(err);
    } else {
      console.log(studentId, videoId, timestamp)
      callback();
    }
  });
};



exports.retrieveTimestamp = retrieveTimestamp;
exports.saveTimestamp = saveTimestamp;
exports.saveVideo = saveVideo;
exports.saveUser = saveUser;
exports.selectAll = selectAll;