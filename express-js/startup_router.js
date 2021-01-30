var express = require('express');
var startup_router = express.Router();
 
// middleware that is specific to this router
startup_router.use(function timeLog (req, res, next) {
  console.log('Requested URI Path : ', req.url)
  next()
})
 
// define the home page route
startup_router.get('/', function (req, res) {
  res.send('Our dotbust startup home page')
})
 
// define the about route
startup_router.get('/about', function (req, res) {
  res.send('About dotbust startup')
})

// define the contact route
startup_router.get('/contact', function (req, res) {
    res.send('Contact dotbust startup')
  })
module.exports = startup_router

//http://localhost:8000/api/
//http://localhost:8000/api/about
//http://localhost:8000/api/contact
