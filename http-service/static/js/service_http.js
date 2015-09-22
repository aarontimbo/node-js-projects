var app = angular.module('serviceApp', []);
var base_url = 'http://localhost:8888';

app.controller('WordController', ['$scope', '$http', function($scope, $http) {
	var vm = this;
	vm.words = [];
	vm.status = '';
	vm.newWord = '';

	vm.getWords = function(){
		$http.get(base_url + '/words')
			.success(function(data, status, headers, config) {
				vm.words = data;
			})
			.error(function(data, status, headers, config){
				vm.status = data;
			});
	};

	vm.addWord = function() {
		$http.post(base_url + '/add', {word: vm.newWord})
			.success(function(data, status, headers, config) {
				vm.newWord = '';
				vm.status = data;
				vm.getWords();
			})
			.error(function(data, status, headers, config){
				vm.status = data;
			});
	};

	vm.removeWord = function(deleteWord) {
		$http.post(base_url + '/remove', {word: deleteWord})
			.success(function(data, status, headers, config) {
				vm.newWord = '';
				vm.status = data;
				vm.getWords();
			})
			.error(function(data, status, headers, config){
				vm.status = data;
			});
	};

	vm.getWords();
}]);