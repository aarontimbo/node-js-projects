var firstApp = angular.module('firstApp', []);

firstApp.controller('FirstController', function() {
	var ctrl = this;
	ctrl.first = 'Some';
	ctrl.last = 'One';
	ctrl.heading = 'Message: ';

	ctrl.updateMessage = function() {
		ctrl.message = 'Hello ' + ctrl.first + ' ' + ctrl.last + '!';
	};
});