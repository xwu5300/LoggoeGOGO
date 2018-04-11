const express = require('express');
const bodyParser = require('body-parser');
const items = require('../database-mysql');
const api = require('../config.js').API;
const searchYouTube = require ('youtube-search-api-with-axios');
const db = require('../database-mysql/index');

var app = express();
app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/owner/search', function (req, res) {
  searchYouTube({key: api, q: req.query.query, order: "viewCount", maxResults: 1}, (video) => {
    db.saveVideo(video[0], () => {
      res.send(video[0])
    });
  });
});

app.get('/owner/videoList', function(req, res) {
  db.selectAll((videos) => {
    res.send(videos);
  })
})

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

