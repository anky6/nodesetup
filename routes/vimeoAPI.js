var Vimeo = require('vimeo').Vimeo
var fs = require('fs')
var filepath = ''

fs.readFile('\sample.mp4', function (err, data) {
   if (err) {

     console.log("FATAL An error occurred trying to read in the file: " + err);
     process.exit(-2);
   }
   // Make sure there's data before we post it
   if(data) {
     filepath = data
     console.log(filepath)
   }
   else {
     console.log("No data to post");
     process.exit(-1);
   }
 });


exports.upload = function (req, res) {
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
};
