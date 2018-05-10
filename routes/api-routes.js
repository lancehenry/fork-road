var db = require("../models");

module.exports = function (app) {

    //GET route for getting all of the restaurants
    app.get("/api/posts/", function (req, res) {
        db.Post.findAll({})
            .then(function (dbPost) {
                res.json(dbPost);
            });
    });

    // Get route for retrieving a single restaurant
    app.get("/api/posts/:id", function (req, res) {
        db.Post.findOne({
            where: {
                id: req.params.id
            }
        })
            .then(function (dbPost) {
                res.json(dbPost);
            });
    });

    // POST route for saving a new restaurant
    app.post("/api/posts", function (req, res) {
        console.log(req.body);
        db.Post.create({
            title: req.body.title,
            body: req.body.body,
            category: req.body.category
        })
            .then(function (dbPost) {
                res.json(dbPost);
            });
    });

    // POST route for saving a new restaurant
    app.post("/api/posts", function (req, res) {
        console.log(req.body);
        db.Post.create({
            title: req.body.title,
            body: req.body.body,
            category: req.body.category
        })
            .then(function (dbPost) {
                res.json(dbPost);
            });
    });

} 