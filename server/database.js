var mysql = require('mysql');

var connection = mysql.createConnection({
    hose : 'localhost',
    user : 'root',
    database: 'oneTeam'
});

var selectTimestamp = (callback) => {
    connection.query('SELECT * FROM timeStamp;', (err, results, fields) => {
        (err) ? callback(err, null) : callback(null, results);
    });
}

var selectAllUsers = (callback) => {
    connection.query('SELECT * FROM users;', (err, results, fields) => {
        (err) ? callback(err, null) : callback(null, results);
    });
}

var selectAllVideos = (callback) => {
    connection.query('SELECT * FROM videos;', (err, results, fields) => {
        (err) ? callback(err, null) : callback(null, results);
    });
}

exports.selectTimestamp = selectTimestamp;
exports.selectAllUsers = selectAllUsers;
exports.selectAllVideos = selectAllVideos;