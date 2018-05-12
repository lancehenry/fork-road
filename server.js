var express = require("express");
var path = require('path');
var bodyParser = require("body-parser");
var passport = require("passport");
var session = require("express-session");
var env = require("dotenv").load();

var PORT = process.env.PORT || 8080;

var app = express();

app.use(express.static("public"));

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// For Passport
app.use(session({ secret: 'go team', resave: true, saveUninitialized: true })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

// Set Handlebars.
var exphbs = require("express-handlebars");

// Models
var models = require("./models");

// Authorization Route
var authRoute = require('./routes/auth.js')(app, passport);

//load passport strategies
require('./config/passport/passport.js')(passport, models.user);

app.set('views', 'views')
app.engine('hbs', exphbs({
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

//app.engine("handlebars", exphbs({ defaultLayout: "main" }));
//app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/authcontroller.js");

// app.use(routes);

// For testing
app.get('/', function(req, res) {
  res.send('Welcome to Passport with Sequelize');
});

//Sync Database
models.sequelize.sync().then(function () {
  console.log('Nice! Database looks fine')

}).catch(function (err) {
  console.log(err, "Something went wrong with the Database Update!")
});

app.listen(8080, function (err) {
  if (!err)
    console.log("Site is live"); else console.log(err)

});