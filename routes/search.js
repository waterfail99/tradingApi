var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  
    let dataArray = 
      [{"symbol":"Msft","full_name":"MSFT","description":"Deckers Outdoor Corp.","exchange":"NYSE","type":"stock"},{"symbol":"AAPL","full_name":"AALP","description":"Apple Inc","exchange":"NasdaqNM","type":"Crypto"}]

    res.json(
        dataArray
    );

});

module.exports = router;
