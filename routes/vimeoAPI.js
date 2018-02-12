var Vimeo = require('vimeo').Vimeo

exports.uploadedvideos = function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');

  var headers = { 'Authorization': 'fe972adaf375470be9dcb58988ae0034', 'Content-Type': 'application/json'}

  // set credentials
  var client = new Vimeo('51154e93acc1fc74030ddd504f7150e344aa709f',
  '37KAZmfbT1JGzvsISOF3K/yk8GO9YH7/2Hy0lOZdwD5eVpLEC/5crkh5GOHbBDdX/LVlf14WMbTCY3t9WQv4MwI2uWwHGFb6Gl0LQXct/jhjSERtMJPI32tLWSf3b7jW' ,
  'fe972adaf375470be9dcb58988ae0034');

  // call get method to see all uploaded videos
  client.request({path: "/me/videos", method: "GET"}, function (error, body, status_code, headers){
    console.log(body);
  res.end('Body:')
  })
}

exports.createuploadVideoRequest = function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');

  var headers = { 'Authorization': 'fe972adaf375470be9dcb58988ae0034', 'Content-Type': 'application/json'}

  // set credentials
  var client = new Vimeo('51154e93acc1fc74030ddd504f7150e344aa709f',
  '37KAZmfbT1JGzvsISOF3K/yk8GO9YH7/2Hy0lOZdwD5eVpLEC/5crkh5GOHbBDdX/LVlf14WMbTCY3t9WQv4MwI2uWwHGFb6Gl0LQXct/jhjSERtMJPI32tLWSf3b7jW' ,
  'fe972adaf375470be9dcb58988ae0034');

  // call get method to see all uploaded videos
  client.request({path: "/me/videos", method: "POST"}, function (error, body, status_code, headers){
    console.log(body);
    var x = body.upload.upload_link
    res.send(x)
  })
}
