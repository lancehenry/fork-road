var db = require("../models");

module.exports = function (app) {
  app.get("/api/dishreviews", function (req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.DishReview.findAll({
      where: {
        userId: req.user.id
      }
    }).then(function (dbDishReview) {
      res.json(dbDishReview);
      console.log(dbDishReview);
    });
  });

  app.post("/api/dishreviews", function (req, res) {
    const newReview = {
      restaurantName: req.body.restaurantName,
      dishName: req.body.dishName,
      dishRating: req.body.dishRating,
      notes: req.body.notes,
      userId: req.user.id
    };
    db.DishReview.create(newReview).then(function (dbDishReview) {
      res.json(dbDishReview);
    });
    res.redirect('/dashboard');
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

  app.put("/api/dishreviews", function(req, res) {
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

