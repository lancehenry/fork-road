var db = require("../models");

module.exports = function (app) {
  app.get("/api/dishreviews", function (req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.DishReview.findAll({
    }).then(function (dbDishReview) {
      res.json(dbDishReview);
    });
  });

  app.post("/api/dishreviews", function (req, res) {
    db.DishReview.create(req.body).then(function (dbDishReview) {
      res.json(dbDishReview);
    });
  });

  app.delete("/api/dishreviews/:id", function (req, res) {
    db.DishReview.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbDishReview) {
      res.json(dbDishReview);
    });
  });

  app.put("/api/dishreview", function(req, res) {
    db.DishReview.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbDishReview) {
      res.json(dbDishReview);
    });
  });
};

