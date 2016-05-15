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

			var Create = {
				name: 'application.homeCreate',
				url: '/list/new',
				views: {
					'main@application': {
						templateUrl : 'js/modules/home/create/homecreate.template.html',
						controller  : 'IndexCreate',
						controllerAs: 'new'
					}
				}
			};

			var View = {
				name: 'application.homeSingle',
				url: '/list/:id',
				views: {
					'main@application': {
						templateUrl : 'js/modules/home/view/homeview.template.html',
						controller  : 'IndexView',
						controllerAs: 'view'
					}
				}
			};

			$stateProvider.state(Index);
			$stateProvider.state(Create);
			$stateProvider.state(View);
		});
})();
