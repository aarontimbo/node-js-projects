var express = require("express");
var ejs = require('ejs');

var app = express();
app.set('views', './views');
app.engine('html', ejs.renderFile);

app.locals = {
	uname : "Brad",
	vehicle : "Jeep",
	terrain : "Mountains",
	climate : "Desert",
	location : "Unknown"
};

app.get('/ejs', function(req, res) {
	// render template
	console.log('rendering template... ');
	app.render('user_ejs.html', function(err, renderedData) {
		console.log('    sending data to template');
		res.send(renderedData);
		console.log('    done sending data to template');
		console.log('errors: ' + err);
	});
});

app.listen(8888);
