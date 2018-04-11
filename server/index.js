const express = require('express');
const bodyParser = require('body-parser');
const {saveVideo, saveUser, selectAll, retrieveTimestamp, saveTimestamp, selectAllUsers, insertStudent, insertOwner} = require('../database-mysql');
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
  selectAll((videos) => {
    res.send(videos);
  })
})


app.get('/timestamps', function (req, res) {
  retrieveTimestamp((data) => {res.send(data)});  
})

app.post('/timestamps', function (req, res) {
  let params = req.body.params;
  saveTimestamp(params, () => {res.status(201).send()});
})


// post username to db for login;
app.post('/username/login', function (req, res) {
  selectAllUsers(function(err, response) {
    if (err) {
    
      res.send([]);
    } else {
    console.log('response', response)

      res.status(201).send(response);
    }
  });
});

// post request for either student or owner username to db
app.post('/username/register', (req, res) => {
  if (req.body.student) {
    insertStudent(req.body, function(err, response) {
      if (err) {
        console.log(err);
      } else {
          res.status(201).send(response)
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





app.listen(3000, function() {
  console.log('listening on port 3000!');
});


