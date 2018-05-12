var db = require("../models");

module.exports = function (app) {
  app.get("/api/restaurants", function (req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Restaurant.findAll({
      include: [db.Dish]
    }).then(function (dbRestaurant) {
      res.json(dbRestaurant);
    });
  });

  app.post("/api/restaurants", function (req, res) {
    db.Restaurant.create(req.body).then(function (dbRestaurant) {
      res.json(dbRestaurant);
    });
  });

  app.delete("/api/authors/:id", function (req, res) {
    db.Restaurant.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbRestaurant) {
      res.json(dbRestaurant);
    });
  });

};
