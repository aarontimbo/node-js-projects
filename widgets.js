var express = require('express');
var bodyParser = require('body-parser');

var widgets = [];

var router = express.Router();
router.post('/', bodyParser.json());
router.post('/', bodyParser.urlencoded({extended: false}));

router.post('/', function(req, res) {
	widgets.push(req.body);
	console.log(widgets);
	res.send('thank ye!');
})

router.get('/', function(req, res) {
	res.render('all_widgets', {widgets: widgets});
});

router.get('/:id', function(req, res) {
	res.render('widget', widgets[req.params.id]);
});

module.exports = router;
