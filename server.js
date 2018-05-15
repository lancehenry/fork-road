var express = require("express");
var models = model("./models");
var bodyParser = require("body-parser");
var passport = require("passport");
var session = require("express-session");
var env = require("dotenv").load();

var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.static("public"));

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// For Passport
app.use(session({ secret: 'go team', resave: true, saveUninitialized: true })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

// Set Handlebars.
var exphbs = require("express-handlebars");

// Authorization Route
var authRoute = require('./routes/auth.js')(app, passport);

//load passport strategies
require('./config/passport/passport.js')(passport, models.user);

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/authcontroller.js");

// app.use(routes);

// For testing
//app.get('/', function(req, res) {
  //res.render('index');
  // res.send('Welcome to Passport with Sequelize');
//});

// Load api-routes
require('./routes/dish-review-routes.js')(app);

//Sync Database
models.sequelize.sync().then(function() {
  app.listen(PORT, function() {
  console.log("App listening");  
  };
});
