var MongoClient = require('mongodb').MongoClient;

var mongo = new MongoClient();

mongo.connect('mongodb://localhost/test', function(err, db) {
	var myDB = db.db('myDB');

	myDB.collection('myCollection', function(err, collection) {
		countItems(collection);
		
		setTimeout(function() {myDB.close(); }, 3000);
	});
});

function countItems(collection) {
	collection.count(function(err, count) {
		console.log('Number of Items: ' + count);
	});
}