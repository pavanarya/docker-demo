var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('Hello World This is Pavan  aaa!'); //write a response to the client
  res.end(); //end the response
}).listen(8085); //the server object listens on port 8080
console.log("Server is running");