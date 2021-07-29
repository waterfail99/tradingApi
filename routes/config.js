var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  
    let dataArray = 
      {"supports_search":true,"supports_group_request":false,"supports_marks":false,"supports_timescale_marks":true,"supports_time":true,"exchanges":[{"value":"","name":"All Exchanges","desc":""},{"value":"NasdaqNM","name":"NasdaqNM","desc":"NasdaqNM"},{"value":"NYSE","name":"NYSE","desc":"NYSE"},{"value":"NCM","name":"NCM","desc":"NCM"},{"value":"NGM","name":"NGM","desc":"NGM"}],"symbols_types":[{"name":"All types","value":""},{"name":"Stock","value":"stock"},{"name":"Index","value":"index"},{"name":"Crypto","value":"crypto"}],"supported_resolutions":["1","3","5","15","240","D","2D","3D","W","3W","M","6M"]}
    ;

    res.json(
        dataArray
    );

});

module.exports = router;
