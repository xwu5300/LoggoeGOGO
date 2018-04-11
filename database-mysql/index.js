const mysql = require('mysql');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  database : 'oneTeam'
});

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

module.exports.saveVideo = saveVideo;
module.exports.saveUser = saveUser;
module.exports.selectAll = selectAll;
