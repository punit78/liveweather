var express = require('express');
var router = express.Router();
var geocoder = require('google-geocoder');


var pin;
var geo = geocoder({
  key: 'AIzaSyAuZT_dXrdNs1ysxEaToneDuvVZxFq6_Vc'
});

router.post('/get',function(req, res, next){

 pin=req.body.code
 console.log(pin)
geo.find(pin, function(err, result){
 
  // process response object
  console.log(err);
  console.log(result);
 res.send(result);
});

});

module.exports = router;



