// require express and other modules
var express = require('express'),
    app = express();

// parse incoming urlencoded form data
// and populate the req.body object
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// allow cross origin requests (optional)
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/************
 * DATABASE *
 ************/

var db = require('./models');

var profile = {
  name: "Will Kaspar",
  githubLink: "https://github.com/wakaspar",
  githubProfileImage: "https://avatars2.githubusercontent.com/u/22823273?v=3&s=460",
  personalSiteLink: "https://wakaspar.github.io/",
  currentCity: "San Francisco, CA",
  pets: [
    {name: 'Indigo', type: 'dog', breed: 'cattle-beagle'},
    {name: 'Furball', type: 'fish', breed: 'goldfish'}
  ],
  plants: [
    {name: 'Bernard', type: 'plant', breed: 'aeonium arboreum'},
    {name: 'Francis', type: 'plant', breed: 'sempervivum tectorum'}
  ]
};

/**********
 * ROUTES *
 **********/

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));

/*
 * HTML Endpoints
 */

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/profile', function profilePage(req, res) {
  res.json(profile);
});
/*
 * JSON API Endpoints
 */

// gets all parks
app.get('/api/parks', function allParks(req, res){
  db.Park.find(function(err, parks){
    if (err){console.log('error: ',err);}
    res.json(parks);
  });
});

// get one park by id
app.get('/api/parks/:id', function oneParkById(req, res){
  db.Park.findOne({ _id: req.params.id }, function (err, park){
    if (err){console.log('error: ', err);}
    res.json(park);
  });
});

// create new park
app.post('/api/parks', function(req, res){
  console.log('parks create: ', req.body);
  var newPark = new db.Park(req.body);
  newPark.save(function handledPark(err, savedPark){
    res.json(savedPark);
  });
});

// delete existing park
app.delete('/api/parks/:id', function(req, res){
  var parkId = req.params.id;
  db.Park.findOneAndRemove({ _id: parkId }, function(err, deletedPark){
    res.json(deletedPark);
  });
});

// update existing park
app.put('/api/parks/:id', function(req, res){
  console.log('parks update ', req.body);
  var parkId = req.params.id;
  var nameUp = req.body.name;
  var locUp = req.body.location;
  var visitUp = req.body.hasVisited;
  var dateUp = req.body.dateVisited;
  db.Park.findByIdAndUpdate({ _id: parkId }, {
    name: nameUp,
    location: locUp,
    hasVisited: visitUp,
    dateVisited: dateUp
  },
   {new: true}, function(err, updatedPark){
    if(err){console.log('error: ', err)}
    res.send(updatedPark);
  });
});


app.get('/api', function apiIndex(req, res) {
  // TODO: Document all your api endpoints below as a simple hardcoded JSON object.
  // It would be seriously overkill to save any of this to your database.
  res.json({
    message: "Welcome to my personal API! Look on my Works, ye Mighty, and despair!!",
    documentationUrl: "https://github.com/example-username/express_self_api/README.md",
    baseUrl: "https://limitless-ridge-30436.herokuapp.com", // CHANGE ME
    endpoints: [
      {
        method: "GET",
        path: "/api",
        description: "Describes all available endpoints"
      },
      {
        method: "GET",
        path: "/api/profile",
        description: "Data about me",
      },
      {
        method: "GET",
        path: "/api/parks",
        description: "Get all parks"
      },
      {
        method: "GET",
        path: "/api/parks/:id",
        description: "Get one park by id"
      },
      {
        method: "POST",
        path: "/api/parks",
        description: "Create a new visited park"
      },
      {
        method: "PUT",
        path: "/api/parks/:id",
        description: "Update visited park"
      },
      {
        method: "DELETE",
        path: "/api/parks/:id",
        description: "Delete visited park"
      }
    ]
  })
});

/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
