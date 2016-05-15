(function () {
	'use strict';

	angular
		.module('getlist')
		.controller('IndexHome', IndexHome);

	function IndexHome(GroceryFactory) {
		// THIS IS A DEMO VARIABLE
		var userId = 1;

		var vm 		= this;
		vm.groceries;
		vm.deleteGroceryItem = deleteGroceryItem;

		activate();

		function activate() {
			GroceryFactory.getGroceries().then(function(response) {
				vm.groceries = response;
			})
		}

		function deleteGroceryItem(id) {

		}

	}

})();
