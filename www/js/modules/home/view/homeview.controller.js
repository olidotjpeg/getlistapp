(function () {
	'use strict';

	angular
		.module('getlist')
		.controller('IndexView', IndexView);

	function IndexView(GroceryFactory, $stateParams) {
		var vm 		= this;
		vm.grocery;

		activate();

		function activate() {
			GroceryFactory.getGrocery($stateParams.id).then(function(response) {
				vm.grocery = response;
				vm.grocery = vm.grocery.shift();
			})
		}

	}

})();
