/*
module.exports = function sayHello( recipient ) {
	console.log('Howdy ' + recipient);	
};
*/

module.exports = {
	add : function(x,y) {
		return x + y;
	},
	subtract : function(x,y) {
		return x - y;
	},
	multiply : function(x,y) {
		return x * y;
	},
	divide : function(x,y) {
		return x / y;
	},
	power : function(x,y) {
		var val = x;
		var i = 1;
		if (y === 0) {
			return 1;
		}
		for (i; i<y; i++){
			val = val * x
		}		
		return val;
	}
};