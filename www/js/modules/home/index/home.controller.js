(function () {
	'use strict';

	angular
		.module('getlist')
		.controller('IndexHome', IndexHome);

	function IndexHome(GroceryFactory) {
		var vm 		= this;
		vm.groceries;
		vm.deleteGroceryItem = deleteGroceryItem;

		activate();

		function activate() {
			GroceryFactory.getGroceries()
			.then(function(response) {
				vm.groceries = response;
			})
			.catch(function(err) {
				console.log(err.data);
			})
		}

		function deleteGroceryItem(id) {
			
		}

	}

})();
