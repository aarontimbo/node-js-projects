var MongoClient = require('mongodb').MongoClient;

var mongo = new MongoClient();

mongo.connect('mongodb://localhost/', function(err, db) {
	var myDB = db.db('myDB');

	myDB.collection('myCollection', function(err, collection) {
		console.log('collection::' + collection);
		sortNamesAscending(collection);
		sortNamesDescending(collection);
		
		setTimeout(function() {myDB.close(); }, 3000);
	});
});

function displayCursor(cursor, msg) {
	cursor.toArray(function(err, itemArr){
		var wordStr = '';
		for(var i in itemArr){
			wordStr += itemArr[i].name + ',';
		}
		console.log('\n' + msg + '\n' + wordStr);
	});
}

function sortNamesAscending(collection) {
	var sorter = [['name', 1]];
	var cursor = collection.find();	
	cursor = cursor.sort(sorter);
	displayCursor(cursor, 'Names ordered ascending:');		
}

function sortNamesDescending(collection) {
	var sorter = [['name', -1]];
	var cursor = collection.find();	
	cursor = cursor.sort(sorter);
	displayCursor(cursor, 'Names ordered descending:');
}

