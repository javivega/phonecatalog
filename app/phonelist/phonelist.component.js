angular.
	module('phonelist'). 
	component('phoneList', {
		templateUrl: 'phonelist/phonelist.html',
		controller: ['$http', function PhonelistController ($http){
			
				var self = this;
				self.orderProp = 'age'
			
			
				$http.get('phones/phones.json').then(function(response){
					self.phones = response.data;
				})
		}]
} )
					 
					 
