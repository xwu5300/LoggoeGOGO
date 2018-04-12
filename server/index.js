const express = require('express');
const bodyParser = require('body-parser');
const {saveVideo, saveUser, selectAllVideos, retrieveTimestamp, saveTimestamp} = require('../database-mysql');
const api = require('../config.js').API;
const searchYouTube = require ('youtube-search-api-with-axios');
const app = express();
app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.get('/owner/search', function (req, res) {
  searchYouTube({key: api, q: req.query.query, order: "viewCount", maxResults: 1}, (video) => {
    saveVideo(video[0], () => {
      res.send(video[0])
    });
  });
});

app.get('/owner/videoList', function(req, res) {
  selectAllVideos((videos) => {
    res.send(videos);
  })
})


app.get('/timestamps', function (req, res) {
  const videoId = req.query.videoId
  retrieveTimestamp(videoId, (data) => {res.json(data)});  
})

app.post('/timestamps', function (req, res) {
  let params = req.body.params;
  saveTimestamp(params, () => {res.status(201).send()});
})

// app.post('/OwnerVideoView', function(req, res) {
//   console.log('req from /OwnerVideoView to server', req.body);
//   res.redirect('/OwnerVideoView', {query: req.body})
// })

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

