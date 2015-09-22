var MongoClient = require('mongodb').MongoClient;

var mongo = new MongoClient();

mongo.connect('mongodb://localhost/', function(err, db) {
	var myDB = db.db('myDB');

	myDB.collection('myCollection', function(err, collection) {
		showNewDocs(collection, addPeople);

		setTimeout(function() {myDB.close(); }, 3000);
	});
});

function showNewDocs(collection, callback) {
	var query = {'category': 'New'};
	collection.find(query, function(err, items) {
		items.toArray(function(err, itemsArr){
			console.log('New Documents: ');
			for (var i in itemsArr) {
				console.log(itemsArr[i]);
			}
			if (callback) {
				callback(collection)
			}
		});
	});
}

function addPeople(collection) {
	var steve = { name: 'Steve', score: 1, category: 'New' };

	var snoop = { name: 'Snoop', score: 3, category: 'New' };

	var options = {w:1, wtimeout:5000, journal:true};
	collection.insert([steve, snoop], options, function(err, results) {
		console.log('\nInsert Results: ' + results);

		showNewDocs(collection, removeNewPeople);
	});	
}

function removeNewPeople(collection) {
	var query = {'category': 'New'};
	var options = {w:1, wtimeout:5000, journal:true};
	collection.remove(query, options, function(err, results) {
		showNewDocs(collection);
	});	
}

