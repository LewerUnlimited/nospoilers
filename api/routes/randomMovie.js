var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
    let movies = ['Lord of the Rings', 'Die Hard 2', 'V for Vendetta',
                  'WALL-E', 'iRobot', 'Pirates of the Carribean']

    res.send(movies[Math.floor(Math.random() * movies.length)]);
});

module.exports = router;