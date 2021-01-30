var express = require('express')
var app = express()
 
// route that gets executed for GET request and the request url path '/' or root
app.get('/', function (req, res) {
   res.send('Home.')
})
 
// route that gets executed for GET request and the request url path '/hello/'
app.get('/hello/', function (req, res) {
   res.send('Hello page.')
})
 
// route that gets executed for GET request and the request url path '/bye/'
app.get('/bye/', function (req, res) {
   res.send('Bye page.')
})
 
// start the server
var server = app.listen(8000, function(){
    console.log('Listening on port 8000...')
})