var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  database : 'oneTeam'
});

var selectAll = function(callback) {
  connection.query('SELECT * FROM timeStamp', function(err, results, fields) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

module.exports.selectAll = selectAll;
