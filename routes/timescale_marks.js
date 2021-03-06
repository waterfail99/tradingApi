var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  
    let dataArray = 
    [{"id":"tsm1","time":1522108800,"color":"red","label":"A","tooltip":""},{"id":"tsm2","time":1521763200,"color":"blue","label":"D","tooltip":["Dividends: $0.56","Date: Fri Mar 23 2018"]},{"id":"tsm3","time":1521504000,"color":"green","label":"D","tooltip":["Dividends: $3.46","Date: Tue Mar 20 2018"]},{"id":"tsm4","time":1520812800,"color":"#999999","label":"E","tooltip":["Earnings: $3.44","Estimate: $3.60"]},{"id":"tsm7","time":1519516800,"color":"red","label":"E","tooltip":["Earnings: $5.40","Estimate: $5.00"]}];
    res.json(
        dataArray
    );

});

module.exports = router;