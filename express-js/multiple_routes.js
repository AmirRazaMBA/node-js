//You can provide one or more functions in the route. Each function is called a middleware.
var express = require('express')
var app = express()
 
function hello(req, res, next) {
   res.write('Hello page. ')
   next()
}
 
function helloagain(req, res, next){
   res.write('Hello again. ')
   res.end()
}
 
// express route with multiple functions
app.get('/hello/', hello, helloagain)
 
// start the server
var server = app.listen(8000, function(){
    console.log('localhost:8000/hello/')
})