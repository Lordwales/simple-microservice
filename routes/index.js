var express = require('express');
var router = express.Router();	
var requestIp = require('request-ip');

/* get present date */
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();


//get engine version and name
var engine_version = process.versions.node; 
var engine_name = process.platform;

/* GET home page. */
router.get('/', function(req, res, next) {
  /*get client ip address */
  var clientIp = requestIp.getClientIp(req);
  var data = {
    "timestamp": date+' '+time,
    "hostname": req.hostname,
    "engine": engine_version+' '+engine_name,
    "visitor ip": req.ip,
  }
  // create a variable of data json
  var data_json = JSON.stringify(data);
  
  console.log(data);
  res.render('index', { title: 'Simple Microservice', data: data_json });
});

module.exports = router;
