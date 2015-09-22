var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/widgets');

var db = mongoose.connection;

db.on('error', function(err) {
	console.error('Connection error', err);
});

var widgetSchema = new mongoose.Schema({
	name: 'string',
	price: 'number'
});

var Widget = mongoose.model('Widget', widgetSchema);

/**
* @param Object like {name: foo, price: 123}
* @param callback
*/
function createAndSaveWidget(data, callback) {
	var widget = new Widget(data);
	widget.save(callback)
}

function logById(id) {
	Widget.findById(id, function(err, data) {
		if (err) {
			console.error(err);
		} else {
			console.log('Here is the widget...', data);
		}		
	});
}

var widgId = null;
createAndSaveWidget({name: 'pencil', price: 12.99}, function(err, data){
	if (err) {
		console.error(err);
	} else {
		console.log('new widget saved!', data);
		widgId = data._id;
		logById(widgId);
	}
});