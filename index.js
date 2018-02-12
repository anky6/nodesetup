var express = require('express')
var app = express()
var vimeolocation = require('./routes/vimeoAPI')

  // create upload request to vimeo
  app.get('/uploadvideo', vimeolocation.createuploadVideoRequest)

  // get all uploaded uploaded videos
  app.get('/getvideo', vimeolocation.uploadedvideos)

// dummy eg
/* app.get('/home', function (req, res) {
res.setHeader('Access-Control-Allow-Origin', '*');
res.end('hello from home')
}) */


  /*Start listening*/
  app.listen(8000, function(){
    console.log('server started at 8000')
  });
