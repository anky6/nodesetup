var express = require('express')
var Vimeo = require('vimeo').Vimeo
var app = express()

var filepath = 'C:\Projects\sample.mp4'
console.log(filepath)

/* Creating server */
//  response.writeHead(200, {"Content-Type": "text/plain"});

// respond with "hello world" when a GET request is made to the homepage
  app.get('/', function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
  // res.end('hello world')
  var client = new Vimeo('51154e93acc1fc74030ddd504f7150e344aa709f',
  '37KAZmfbT1JGzvsISOF3K/yk8GO9YH7/2Hy0lOZdwD5eVpLEC/5crkh5GOHbBDdX/LVlf14WMbTCY3t9WQv4MwI2uWwHGFb6Gl0LQXct/jhjSERtMJPI32tLWSf3b7jW' ,
  'fe972adaf375470be9dcb58988ae0034');
client.upload(
  filepath,
  function (uri) {
    console.log('File upload completed. Your Vimeo URI is:', uri)
    res.end('File upload completed. Your Vimeo URI is:', uri)
  },
  function (bytesUploaded, bytesTotal) {
    var percentage = (bytesUploaded / bytesTotal * 100).toFixed(2)
    console.log(bytesUploaded, bytesTotal, percentage + '%')
  },
  function (error) {
    console.log('Failed because: ' + error)
    res.end(error)
  }
)
})

app.get('/home', function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
res.end('hello from home')
})
  //response.end("Hello World\n");
  /*Start listening*/
  app.listen(8000, function(){
    console.log('server started at 8000')
  });
