var http = require('http');
var dt   = require('./mymodule.js');

http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type': 'text/html'});
	res.write("todays date and time"+ dt.myDateTime());
	res.end('Hello World');
}).listen(8080);
