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
			GroceryFactory.getGrocery($stateParams.name).then(function(response) {
				vm.grocery = response;
			})
		}

	}

})();
