// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the posts
  app.get("/api/dishes", function(req, res) {
    var query = {};
    if (req.query.restaurantName_id) {
      query.RestaurantId = req.query.restaurantName_id;
    }
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Restaurant
    db.Dish.findAll({
      where: query,
      include: [db.Restaurant]
    }).then(function(dbDish) {
      res.json(dbDish);
    });
  });

  // POST route for saving a new dish
  app.post("/api/dishes", function(req, res) {
    db.Dish.create(req.body).then(function(dbDish) {
      res.json(dbDish);
    });
  });

  // DELETE route for deleting dishes
  app.delete("/api/dishes/:id", function(req, res) {
    db.Dish.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbDish) {
      res.json(dbDish);
    });
  });

  // PUT route for updating Dishes
  app.put("/api/dishes", function(req, res) {
    db.Dish.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbDish) {
      res.json(dbDish);
    });
  });
};
