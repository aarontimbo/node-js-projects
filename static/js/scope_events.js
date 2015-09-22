var app = angular.module('eventsApp', []);

app.controller('Characters', ['$scope', function($scope) {
	var vm = this;
	vm.names = ['Frodo', 'Aragorn', 'Gimli', 'Legolas'];
	$scope.currentName = vm.names[0];

	$scope.changeName = function() {
		if (vm.names.length > 1) {
			console.log('Changing name to ' + this.name);
			$scope.currentName = this.name;
			$scope.$broadcast('CharacterChanged', this.name);			
		}
	};

	$scope.$on('CharacterDeleted', function(event, removeName){
		var i = vm.names.indexOf(removeName);
		vm.names.splice(i, 1);
		$scope.currentName = vm.names[0];
		$scope.$broadcast('CharacterChanged', $scope.currentName);
	});
}]);

app.controller('Character', ['$scope', function($scope) {
	var vm = this;
	vm.info = {
		'Frodo': {weapon: 'Sting', race: 'Hobbit'},
		'Aragorn': {weapon: 'Sword', race: 'Human'},
		'Gimli': {weapon: 'Axe', race: 'Dwarf'},
		'Legolas': {weapon: 'Bow', race: 'Elf'}
	};

	vm.currentInfo = vm.info.Frodo;
	
	$scope.$on('CharacterChanged', function(event, newCharacter) {
		vm.currentInfo = vm.info[newCharacter];
	});

	vm.deleteChar = function() {
		console.log('Deleting ' + $scope.currentName);
		delete vm.info[$scope.currentName];
		$scope.$emit('CharacterDeleted', $scope.currentName);
	};
}]);