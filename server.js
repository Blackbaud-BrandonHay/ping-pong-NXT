// modules =================================================
var express        = require('express');
var app            = express();
var mongoose       = require('mongoose');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var MongoClient = require('mongodb').MongoClient;

// config files
var db = require('./config/db');

var port = process.env.PORT || 8080; // set our port
// mongoose.connect(db.url); // connect to our mongoDB database (commented out after you enter in your own credentials)

// Connect to the db
var url = 'mongodb://localhost:8080/test';
MongoClient.connect(url, function(err, db) {
  if(!err) {
    console.log("We are connected");

    // Get collections
    var gamesCollection = db.collection('games');
    var playersCollection = db.collection('players');

    playersCollection.insertMany({}, function(err, r) {
      if (err) {
        console.log(err);
      } else {
        console.log('Inserted %d documents into the "players" collection, the documents inserted are:', r.length, r);
      }
    db.close();
    });

  }
});

// get all data/stuff of the body (POST) parameters
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded

app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users

// routes ==================================================
require('./app/routes')(app); // pass our application into our routes

// start app ===============================================
app.listen(port);
console.log('Magic happens on port ' + port); 			// shoutout to the user
exports = module.exports = app; 						// expose app
