var express = require('express')
var app = express()
var vimeolocation = require('./routes/vimeoAPI')

/* Creating server */
//  response.writeHead(200, {"Content-Type": "text/plain"});

// respond with "hello world" when a GET request is made to the homepage
  app.get('/', vimeolocation.upload)

app.get('/home', function (req, res) {
res.setHeader('Access-Control-Allow-Origin', '*');
res.end('hello from home')
})
  //response.end("Hello World\n");
  /*Start listening*/
  app.listen(8000, function(){
    console.log('server started at 8000')
  });
