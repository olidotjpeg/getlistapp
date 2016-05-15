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
			GroceryFactory.getUser(1).then(function(response) {
				console.log(response);
			})
		}

		function deleteGroceryItem(id) {

		}

	}

})();
