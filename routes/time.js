var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  
    let dataArray = 
        1619432070;

    res.json(
        dataArray
    );

});

module.exports = router;