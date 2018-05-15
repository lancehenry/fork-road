var exports = (module.exports = {});
var db = require("../models");

exports.signup = function(req, res) {
  res.render('signup', { title: 'Sign Up | Fork in the Road', layout: 'authentication' });
};

exports.signin = function(req, res) {
  res.render('signin', { title: 'Sign In | Fork in the Road', layout: 'authentication' });
};

exports.dashboard = function(req, res) {
  db.DishReview.findAll({
    where: {
      userId: req.user.id
    }
  }).then(function (DishReview) {
    if (DishReview[0]){
      res.render('dashboard', {DishReview});
    } else { 
      res.render('dashboard');
    }
  });
};

exports.logout = function(req, res) {
  req.session.destroy(function(err) {
    res.redirect('/');
  });
};
