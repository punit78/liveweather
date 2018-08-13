var express = require('express');
var rp=require('request-promise');
var router = express.Router();


router.post('/get',function(req, res, next){

  //create request object
const options={
  method:'GET',
  uri:'https://openweathermap.org/data/2.5/weather',
  qs:{
    q:req.body.code,
    appid:'b6907d289e10d714a6e88b30761fae22'
  },
  json:true
};

//send request object and process response
rp(options)
   .then((result)=>{
   res.send(result);
   })
    .catch((err)=>{
  console.log(err )
    })
 

});



module.exports = router;



