var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  
    let dataArray = 
    {"id":[0,1,2,3,4,5],"time":[1522108800,1521763200,1521504000,1521504000,1520812800,1519516800],"color":["red","blue","green","red","blue","green"],"text":["Red","Blue","Green + Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","Red again","Blue","Green"],"label":["A","B","CORE","D","EURO","F"],"labelFontColor":["white","white","red","#FFFFFF","white","#000"],"minSize":[14,28,7,40,7,14]}    ;

    res.json(
        dataArray
    );

});

module.exports = router;