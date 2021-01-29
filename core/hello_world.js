var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('This Algorithm says Hello World!');
  res.write(req.url);   // http://localhost:8080/Summer will print Summer
  res.end();
}).listen(8080);