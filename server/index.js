const {
  saveVideo, 
  saveUser, 
  selectAllVideos, 
  retrieveTimestamp, 
  saveTimestamp, 
  deleteTimestamp, 
  selectAllUsers, 
  insertStudent, 
  insertOwner,
  retrieveUserId,
  selectOwnerVideos,
  selectCurrentVideo
} = require('../database-mysql');
const express = require('express');
const bodyParser = require('body-parser');

const searchYouTube = require ('youtube-search-api-with-axios');
const api = require('../config.js').API;

const app = express();
const axios = require('axios');
const moment = require('moment');

app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//---------------------------------------------------------USER LOGIN

// post username to db for login;
app.post('/username/login', function (req, res) {
    // console.log(req.body.username);
  selectAllUsers(req.body.username, function(err, response) {
    if (err) {
      console.log(err);
      res.send();
    } else {
      res.status(201).send(response);
    }
  });
});

//---------------------------------------------------------USER REGISTRATION
// post request for either student or owner username to db
app.post('/username/register', (req, res) => {
  if (req.body.student) {
    insertStudent(req.body, function(err, response) {
      if (err) {
        console.log(err);
      } else {
          res.status(201).send(response);
      }
    })
  } else {
    insertOwner(req.body, function(err, response) {
      if (err) {
        console.log(err)
      } else {
        res.status(201).send(response);
      }
    })
  }
});

//---------------------------------------------------------USER ID
//get userId for owner homepage and student homepage
app.get('/users', (req, res) => {
  retrieveUserId(req.query.user, (userId) => {
    res.send(userId);
  })
})


//---------------------------------------------------------STUDENT USER REQUESTS
//get all videos for student homepage
app.get('/student/homepage', (req, res) => selectAllVideos((videos) => res.send(videos)));

//---------------------------------------------------------OWNER USER REQUESTS

app.get('/owner/search', (req, res) => {
  searchYouTube({key: api, q: req.query.query, maxResults: 1}, 
    (video) => {
      axios.get(`https://www.googleapis.com/youtube/v3/videos?id=${video[0].id.videoId}&part=contentDetails&key=${api}`)
      .then((data) => {
        var duration = moment.duration(data.data.items[0].contentDetails.duration, moment.ISO_8601).asSeconds();
        saveVideo(video[0], req.query.userId, duration, () => {
          selectCurrentVideo(video[0].id.videoId, (video) => {
            // console.log('selectCurrentVideo in server', video[0])
            res.send(video[0])
          })
        })
      });
    });
});

//get all videos for owner.

app.get('/owner/videoList', function(req, res) {
  selectOwnerVideos(req.query.userId, (videos) => {
    res.send(videos);
  })
})

//---------------------------------------------------------WORKING WITH TIMESTAMPS

app.get('/timestamps', function (req, res) {
  const videoId = req.query.videoId
  retrieveTimestamp(videoId, (data) => {res.json(data)});  
})

app.post('/timestamps', function (req, res) {
  let params = req.body.params;
  saveTimestamp(params, (success) => {res.status(201).send()});
})

app.delete('/timestamps', function (req, res) {
  let params = req.query;
  deleteTimestamp(params, (success) => {res.send()})
})

//---------------------------------------------------------SERVER


app.listen(3000, function() {
  console.log('listening on port 3000!');
});