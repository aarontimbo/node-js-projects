var express = require('express');
var app = express();

app.use('/', express.static('./static'))
	.use('/', express.static('./images'));
app.listen('8888');