var app = angular.module('GiphyApp', []);
app.controller('SearchCtrl', ['$scope', '$http', function($scope, $http){
	//Search Term
	$scope.searchTerm = 'cats';

	//Search Function 
	$scope.$watch('searchTerm', function(newVal, oldVal){
		console.log('in the watch');
			var req = {
				url: 'http://api.giphy.com/v1/gifs/search?',
				method: 'GET',
				params: {
					q: $scope.searchTerm,
					limit: 40, 
					api_key: 'dc6zaTOxFJmzC'
				}
			}
			console.log(req);

			$http(req).then(function success(res){
				$scope.gifs = res.data.data;
				console.log(res);
			}, function error(res){
				console.log('There was an error', res);
			});
		});
}])

//search for a topic and view GIFs
//The public beta key is "dc6zaTOxFJmzC”

