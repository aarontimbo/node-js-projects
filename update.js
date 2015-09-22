var MongoClient = require('mongodb').MongoClient;

var mongo = new MongoClient();

mongo.connect('mongodb://localhost/', function(err, db){
	var myDB = db.db('myDB');

	myDB.collection('myCollection', function(err, collection) {
		showPerson(collection, updateDoc);

		setTimeout(function() {myDB.close(); }, 3000);
	});
});

function showPerson(collection, callback){
	var query = { 'name': {'$in' : ['William', 'Willy']}};

	collection.find(query, function(err, items) {
		items.toArray(function(err, itemsArr) {
			console.log(itemsArr);

			if (callback) {
				callback(collection);
			}
		});
	});
}

function updateDoc(collection){
	var query = {'name': 'William'};

	var update = { '$set' : {'name': 'Willy'}};

	var options = {w:1, wtimeout:5000, journal:true, upsert:false, multi:false};

	collection.update(query, update, function(err, results){
		console.log('\nUpdating Doc Results: ' + results);
		console.log('\nAfter Updating Doc: ');
		showPerson(collection, resetDoc);
	});	
}

function resetDoc(collection){
	var query = {'name': 'Willy'};

	var update = { '$set' : {'name': 'William'}};

	var options = {w:1, wtimeout:5000, journal:true, upsert:false, multi:false};

	collection.update(query, update, function(err, results){
		console.log('\nReset Doc Results: ' + results);
		console.log('\nAfter Resetting Doc: ');
		showPerson(collection);
	});	
}