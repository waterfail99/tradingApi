var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  
    let dataArray = 
        "Datafeed version is 2.0.4 \nValid keys count is 5 \nCurrent key is zy1"

        res.setHeader('content-type', 'text/plain');
        res.send(
        dataArray
    );

});

module.exports = router;