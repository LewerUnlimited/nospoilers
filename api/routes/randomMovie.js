var express = require("express");
var router = express.Router();
let DateGenerator = require('random-date-generator');

router.get("/", function(req, res, next) {
    let startDate = new Date(1878, 6, 14);
    let todaysDate = new Date
    let endDate = new Date(todaysDate.getUTCFullYear(), todaysDate.getUTCMonth(), todaysDate.getUTCDate())
    var request = require('request');
    let randomDate = DateGenerator.getRandomDateInRange(startDate, endDate).toISOString().split('T')[0];
    request('https://api.themoviedb.org/3/discover/movie?api_key=9b9ffe51ec80e0eb9192ace2d1c91a91&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&release_date.gte=' + randomDate + '&release_date.lte=' + randomDate, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            let jsonBody = JSON.parse(body)
            if(jsonBody.results.length > 0){
                let movieTitle = jsonBody.results[0].title
                res.send(movieTitle);
            }
            else{
                res.send("AHHH nothing found!!!")
            }
        }
    })
});

module.exports = router;