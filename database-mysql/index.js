var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  database : 'oneTeam'
});

var retrieveTimestamp = function(callback) {
  connection.query('SELECT * FROM timeStamp;', function(err, results, fields) {
    if(err) {
      console.error(err);
    } else {
      callback(results);
    }
  });
};


var saveTimestamp = function({studentId, videoId, timestamp}, callback) {
  connection.query(`INSERT INTO timeStamp (studentId, videoId, timeStamp) VALUES (${studentId}, '${videoId}', ${timestamp});`, function(err, results, fields) {
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



