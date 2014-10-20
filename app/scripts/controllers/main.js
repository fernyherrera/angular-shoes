'use strict';
(function(){
/**
 * @ngdoc function
 * @name angularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularApp
 */
var app = angular.module('angularApp.controller.main', []);

  app.controller('MainCtrl', [ '$scope','cart','$rootScope', '$http', '$firebase', function($scope, cart, $rootScope, $http, $firebase) {
  	// Filter for categories
    $scope.filter = {};

    // An array of items for sale
    $scope.itemsForSale = {};

//    $http({method:'GET', url:'/shoes.json'}).success(function(data){
//      $scope.itemsForSale = data;
//    }).error(function(data,status){
//      $scope.itemsForSale = 'Error '+status;
//    });

    // AngularFire

    var ref = new Firebase("https://angular-shoes.firebaseio.com");
    var sync = $firebase(ref);
    var myList = sync.$asArray();
    $scope.itemsForSale = myList;

  }]);

  app.directive('myShoes', function(){
    return {
      restrict: 'AE',
      templateUrl: 'partials/main.html'
    }
  });
  
  app.directive("enter", function(){
	  return function (scope,element,attrs) {
		  element.bind("mouseenter", function(){
			  element.addClass(attrs.enter);
		  });
	  }
  });

  app.controller('DetailCtrl', function($scope,$http,$stateParams,$rootScope,cart){
  	//$scope.itemDetails = shoes.getItems();

    // An array of items for sale
    $scope.itemDetails = {};

    $http({method:'GET', url:'/shoes.json'}).success(function(data){
      $scope.itemDetails = data;
      $scope.itemDetail = $scope.itemDetails[$stateParams.id];
    }).error(function(data,status){
      $scope.itemDetails = 'Error '+status;
    });



    $scope.addToCart = function(obj) {
      $rootScope.cartCount = $rootScope.cartCount + 1;
      return cart.add(obj);
    };

    $scope.current = 0;

    $scope.setCurrent = function(newGallery) {
      $scope.current = newGallery || 0;
    };
  });
})();