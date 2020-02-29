var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
    var request = require('request');
    request('https://api.themoviedb.org/3/genre/movie/list?api_key=9b9ffe51ec80e0eb9192ace2d1c91a91&language=en-US', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.send(body);
        }
    })
});

module.exports = router;