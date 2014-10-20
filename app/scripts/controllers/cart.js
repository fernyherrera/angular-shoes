'use strict';
(function(){
var app = angular.module('angularApp.controller.cart',[]);

  app.directive('shoppingCart', function(){
    return {
      restrict: 'E',
      template:'<ul class="nav nav-pills pull-right" id="cart"><li><a><span class="glyphicon glyphicon-shopping-cart" ng-click="cartShow()"></span><span class="badge" ng-show="cartCount" ng-init="gCartCount()">{{ cartCount }}</span></a></li></ul>',
      controller: function($scope,cart, $rootScope){

        $scope.gCartCount = function() {
          $rootScope.cartCount = cart.count();
        }

        //Display items
        $scope.cartShowActive = false;

        $scope.cartShow = function() {
          if($rootScope.cartCount > 0 && $scope.cartShowActive == false) {
            $scope.cartShowActive = true;
          } else if ($scope.cartShowActive == true) {
            $scope.cartShowActive = false;
          }
        }
      }

    }
  });

  app.directive('myCartItems', function() {
    return {
      restrict: 'E',
      templateUrl: 'partials/cartItems.html',
      controller: function($scope,cart, $rootScope){

        // remove items
        $scope.removeItem = function(index){
          console.log('item removed at ' + index);
          $scope.cartItems = $scope.cartItems.slice(index, 1);
        };


        // For debuggin only
        $scope.deleteCart = function () {
          cart.deleteCart();
          $rootScope.cartCount = 0;
        };

        // Shopping Cart Items
        $scope.cartItems = cart.get();

      }
    };
  });
})();