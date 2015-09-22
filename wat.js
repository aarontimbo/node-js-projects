var i = 'a';

whatIsIt('a');
whatIsIt('aa');
whatIsIt(['aa']);
whatIsIt(['aa', 'bb']);
whatIsIt([{'a':1}, {'b':2}]);

function whatIsIt(foo) {
	if( Object.prototype.toString.call( foo ) === '[object Array]' ) {
	    console.log('"' + foo + '" is an Array!');
	} else {
		console.log('Nope, "' + foo + '" is not an array.');
	}
	// if (foo.length > 1) {
	// 	console.log('\n' + foo + ' is a list greater than one');
	// } else if (foo.length == 1) {
	// 	console.log('\n' + foo + ' is a list of one');	
	// }
}