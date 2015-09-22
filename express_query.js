var express = require("express");
var app = express();

app.use('/', express.query());

app.get('/', function(req, res) {
	var response = '<h2>Your Query Params:</h2>';
	response += JSON.stringify(req.query);
	res.send(response);
});

app.listen(8888);