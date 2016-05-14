(function() {
	'use strict';

	angular.module('getlist')
		/* @ngInject */
		.config(function ($stateProvider) {

			var Application = {
				name: 'application',
				abstract: true,
				views : {
					// Wrapping view
					'application': {
						templateUrl: 'js/modules/_application/application.template.html'
					}
					// 'topbar@application': {
					// 	templateUrl: 'js/modules/shared/topbar/topbar.template.html',
					// 	controller: 'Topbar',
					// 	controllerAs: 'topbar'
					// },
				}
			};


			$stateProvider.state(Application);
		});
})();
