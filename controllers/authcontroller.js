var exports = (module.exports = {});

exports.signup = function(req, res) {
  res.render('signup', { title: 'Sign Up | Fork in the Road', layout: 'authentication' });
};

exports.signin = function(req, res) {
  res.render('signin', { title: 'Sign In | Fork in the Road', layout: 'authentication' });
};

exports.dashboard = function(req, res) {
  res.render('dashboard');
};

exports.logout = function(req, res) {
  req.session.destroy(function(err) {
    res.redirect('/');
  });
};
