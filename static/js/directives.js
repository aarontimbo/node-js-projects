angular.module('directiveApp', [])
	.controller('radioController', function() {
		var me = this;
		me.colors = ['red','green','blue'];
		me.myStyle = {
			"background-color": 'blue',
			"display": "inline-block",
			"height": "100px",
			"width": "100px"
		};
	})

	.controller('selectController', function() {
		var me = this;
		me.cameras = [
			{make: 'Canon', model: '70D', mp: 20.2},
			{make: 'Canon', model: '6D', mp: 20},
			{make: 'Nikon', model: 'D7100', mp: 24.1},
			{make: 'Nikon', model: 'D5200', mp: 24.1},
		];
		me.cameraObj = me.cameras[0];
		me.cameraName = 'Canon';
	})

	.controller('eventsController', function () {
		var me = this;
		me.keyInfo = {};
		me.mouseInfo = {};

		me.keyStroke = function(event){
			me.keyInfo.keyCode = event.keyCode;
		};

		me.mouseClick = function(event){
			me.mouseInfo.clientX = event.clientX;
			me.mouseInfo.clientY = event.clientY;
			me.mouseInfo.screenX = event.screenX;
			me.mouseInfo.screenY = event.screenY;
		};
	});