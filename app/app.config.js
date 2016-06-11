angular.
	module('phonecatApp'). 
	config(['$locationProvider','$routeProvider', 
			function($locationProvider, $routeProvider){
				$locationProvider.hashPrefix('!');
		
		$routeProvider.
			when('/phones', {
				template: '<phone-list><phone-list>'
		}). 
			otherwise('/phones');
	}])
