(function () {
	'use strict';

	angular
		.module('getlist')
		.controller('IndexCreate', IndexCreate);

	function IndexCreate(GroceryFactory) {
		var vm 		= this;
        vm.create   = create;

		activate();

		function activate() {
		}

        function create() {
            var postObj = {
                listid: Math.floor(Math.random() * (100 - 1)),
                userid: Math.floor(Math.random() * (100 - 1)),
                listname: vm.name,
                description: vm.description
            }
            GroceryFactory.postList(postObj)
                .then(function(response) {
                    console.log(response);
                })
        }

	}

})();
