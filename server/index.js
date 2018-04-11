var express = require('express');
var bodyParser = require('body-parser');
var {selectTimestamp, selectAllUsers, selectAllVideos} = require ('./database.js');

var app = express();

app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/timestamps', (req, res) => {
  selectTimestamp((err, data) => {
    if(err, null) console.error(err);
    if(null, data) res.send(data);
  })
});

app.get('/users', (req, res) => {
  selectAllUsers((err, data) => {
    if(err, null) console.error(err);
    if(null, data) res.send(data);
  })
});

app.get('/videos', (req, res) => {
  selectAllVideos((err, data) => {
    if(err, null) console.error(err);
    if(null, data) res.send(data);
  })
});


app.listen(3000, () => console.log('listening on port 3000!'));

