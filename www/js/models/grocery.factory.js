(function () {
	'use strict';

	angular
	.module('getlist')
	.factory('GroceryFactory', GroceryFactory);

	function GroceryFactory($http) {
		var API_URL = 'http://localhost:8080/api/';

		var service = {
            getGroceries: getGroceries,
			getGrocery: getGrocery,
			postList: postList
		};

		return service;

		function getGroceries() {
		    return $http.get(API_URL + 'lists')
    		    .then(function(response) {
		            return response.data;
    		    });
		}

		function getGrocery(id) {
			return $http.get(API_URL + 'lists/' + id)
				.then(function(response) {
					return response.data;
				})
		}

		function postList(article) {
			return $http.post(API_URL + 'addlist', article)
				.then(function(response) {
					console.log(article);
					return response.data;
					console.log(response);
				})
		}
	}

})();
