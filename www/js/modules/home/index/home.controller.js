(function () {
	'use strict';

	angular
		.module('getlist')
		.controller('IndexHome', IndexHome);

	function IndexHome(GroceryFactory) {
		// THIS IS A DEMO VARIABLE
		var userId = 1;

		var vm 		= this;
		vm.user;
		vm.groceries;
		vm.deleteGroceryItem = deleteGroceryItem;

		activate();

		function activate() {
			GroceryFactory.getUser(userId).then(function(response) {
				vm.user = response;
				vm.user = vm.user.shift();
				console.log(vm.user);
			})
		}

		function deleteGroceryItem(id) {

		}

	}

})();
