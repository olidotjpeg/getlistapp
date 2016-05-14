(function() {
	'use strict';

	angular.module('getlist')
		/* @ngInject */
		.config(function ($stateProvider) {

			var Index = {
				name: 'application.home',
				url: '/',
				views: {
					'main@application': {
						templateUrl: 'js/modules/home/index/home.template.html',
						controller: 'IndexHome',
						controllerAs: 'home'
					}
				}
			};

			var View = {
				name: 'application.homeSingle',
				url: '/list/:name',
				views: {
					'main@application': {
						templateUrl : 'js/modules/home/view/homeview.template.html',
						controller  : 'IndexView',
						controllerAs: 'view'
					}
				}
			};

			$stateProvider.state(Index);
			$stateProvider.state(View);
		});
})();
