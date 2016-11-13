/**
 * 
 */
(
function () {
	'use strict';

	angular.module( 'LunchCheck', [] )
		   .controller( 'LunchCheckController', LunchCheckController );
	
	LunchCheckController.$inject = ['$scope'];

	function LunchCheckController( $scope ) {
		const MessageNothing = "Please enter data first";
		
		$scope.lunchItems = "";
		$scope.lunchMessage = "";
			
		$scope.checkLunch = function() {
			if ( ! $scope.lunchItems ) {
				$scope.lunchMessage = MessageNothing;
				return;
			}

			var lunchItems = $scope.lunchItems.split(",").filter( function(item) { 
								return (item.trim().length > 0) 
							 } );
			var itemCount = lunchItems.length;
			if ( itemCount == 0 ) {
				$scope.lunchMessage = MessageNothing;
			} else if ( itemCount <= 3) {
				$scope.lunchMessage = "Enjoy!";
			} else {
				$scope.lunchMessage = "Too much!" ;
			}
		};
	}
}
)();