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
  res.send('One day, I\'ll be a profile!');
});
/*
 * JSON API Endpoints
 */

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
        name: "Will Kaspar",
        githubLink: "https://github.com/wakaspar",
        githubProfileImage: "https://avatars2.githubusercontent.com/u/22823273?v=3&s=460",
        personalSiteLink: "https://wakaspar.github.io/",
        currentCity: "San Francisco, CA",
        pets: [{name: 'Indigo', type:'dog', breed:'cattle-beagle'}]
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
        method: "GET",
        path: "/api/parks",
        description: "Get all parks"
      },
      {
        method: "GET",
        path: "/api/parks/:id",
        description: "Get one park by id"
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
