var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    const {symbol}= req.query;
    let dataArray = {
    MSFT:{"name":"Msft","exchange-traded":"NasdaqNM","exchange-listed":"NasdaqNM","timezone":"America/New_York","minmov":4,"minmov2":0,"pointvalue":1,"session":"0930-1630","has_intraday":false,"has_no_volume":false,"description":"Apple Inc. hahha","type":"stock","supported_resolutions":["1","3","5","15","240","D","2D","3D","W","3W","M","6M"],"pricescale":100,"ticker":"MSFT"},
    AAPL:{"name":"AAPL","exchange-traded":"Nas","exchange-listed":"Nas","timezone":"America/New_York","minmov":4,"minmov2":0,"pointvalue":1,"session":"0930-1630","has_intraday":true,"has_no_volume":true,"description":"Apple Inc. hahha","type":"stock","supported_resolutions":["1","3","5","15","240","D","2D","3D"],"pricescale":10000,"ticker":"AAPL"}
    }
    res.json(
        dataArray[symbol]
    );

});

module.exports = router;