var http = require('http');
 
// Configure our HTTP server to respond with Hello DCA 2013 to all requests.
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello DCA 2013\n");
});
 
server.listen(process.env.PORT);
