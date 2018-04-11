var express = require('express');
var bodyParser = require('body-parser');
var {retrieveTimestamp, saveTimestamp} = require('../database-mysql');

var app = express();
app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.get('/timestamps', function (req, res) {
  retrieveTimestamp((data) => {res.send(data)});  
})

app.post('/timestamps', function (req, res) {
  let params = req.body.params;
  saveTimestamp(params, () => {res.status(201).send()});
})


app.listen(3000, function() {
  console.log('listening on port 3000!');
});

