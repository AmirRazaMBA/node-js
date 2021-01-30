var express = require('express')
var app = express()
 
var startup_router = require('./startup_router')
app.use('/api/', startup_router)
 
// start the server
var server = app.listen(8000, function(){
    console.log('Listening on port 8000...')
})

//http://localhost:8000/api/
//http://localhost:8000/api/about
//http://localhost:8000/api/contact