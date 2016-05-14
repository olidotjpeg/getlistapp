(function () {
	'use strict';

	angular
	.module('getlist')
	.factory('GroceryFactory', GroceryFactory);

	function GroceryFactory($http) {
		var service = {
            getGroceries: getGroceries,
			getGrocery: getGrocery
		};

		return service;

		function getGroceries() {
		    return $http.get('groceries.json')
    		    .then(function(response) {
		            return response.data;
    		    });
		}

		function getGrocery(name) {
			return $http.get('groceries.json')
				.then(function(response) {
					return _.filter(response.data, ['name', name]).shift();
				})
		}
	}

})();
