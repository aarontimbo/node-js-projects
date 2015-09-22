var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use('/', express.static('./static'));
app.use(bodyParser());

var words = ['test'];

app.get('/words', function(req, res){
	res.json(words);
});

app.post('/add', function(req, res){
	var word = req.body.word;
	var index = words.indexOf(word);
	if (index !== -1) {
		res.json(400, word + ' already exists.');
	} else {
		words.push(req.body.word);
		res.json(200, word + ' Added.');
	}
})

app.post('/remove', function(req, res){
	var word = req.body.word;
	var index = words.indexOf(word);
	if (index !== -1) {
		words.splice(index, 1);
		res.json(200, word + ' Removed.');
	}
})

app.listen('8888');