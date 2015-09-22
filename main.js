// in my-module.js
/*
var foobar = require('./my-module.js');

foobar('partner!')
*/

/*
var mymath = require('./my-module.js');
var x = 1, y = 2;
console.log(x + ' + ' + y + ' = ' + mymath.add(x,y));
console.log(x + ' - ' + y + ' = ' + mymath.subtract(x,y));
console.log(x + ' * ' + y + ' = ' + mymath.multiply(x,y));
console.log(x + ' / ' + y + ' = ' + mymath.divide(x,y));
x = 2;
y = 2;
console.log(x + ' ^ ' + y + ' = ' + mymath.power(x,y));
*/

/***************************
* Build a server
***************************/
var fs = require('fs');
var http = require('http');
var mime = require('mime');
var path = require('path');
var url = require('url');

var port = 3000;
var staticAssetPath = __dirname; 

var server =  http.createServer();
server.on('request', handleReq);

server.listen(port, '127.0.0.1', function() {
	console.log('The server is up and running on port %d ', port);
});

function handleReq(req, res) {
	// read file request
	var pathname = url.parse(req.url).pathname;
	pathname = path.join(staticAssetPath, pathname);
	var cType = mime.lookup(pathname);
	fs.readFile(pathname, function(err, data) {
		if (err) {
			res.statusCode = 404;
			res.stateMessage = 'Not Found';
			res.end('not found : (');
			return;
		} else {
			console.log('serving file %s', pathname);
			res.writeHead(200, {
				'Content-type': cType,
				'X-Powered-By': 'Macs',
				'Location': 'The tubes'
			});
		}
		res.end(data);
	})
}

/*
function handleReq(req, res) {
	// build a response
	res.writeHead(200, {
		'Content-type': 'text/plain',
		'X-Powered-By': 'Macs',
		'Location': 'The tubes'
	});

	// close response and send
	res.end( 'Hello World!');
}
*/
