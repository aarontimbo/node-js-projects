var bodyParser = require('body-parser');
var express = require('express');
var port = 3000;

// create express server
var app = express();

// middleware
app.use(express.static(__dirname + '/public'));

// add a handler
app.get('/', function(req, res, next){
	res.send('yo');
});

app.post('/snark', bodyParser.json());
app.post('/snark', bodyParser.urlencoded({extended: false}));

app.post('/snark', function(req, res){
	console.log('ah ah ah, keep searching...');
	console.log(req.body);
	res.redirect('/');
});

app.listen(port);