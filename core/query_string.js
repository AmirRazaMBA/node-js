var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;
  var txt = q.year + " " + q.month;
  res.end(txt);
  
  var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
  var r = url.parse(adr, true);

  console.log("host:" + r.host); //returns 'localhost:8080'
  console.log("pathname:" + r.pathname); //returns '/default.htm'
  console.log("search:" + r.search); //returns '?year=2017&month=february'
}).listen(8080);

//http://localhost:8080/?year=2017&month=July