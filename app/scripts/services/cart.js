'use strict';
angular.
  module('angularApp.service.cart',[]).
    factory('cart', function() {
    var cartItems = [];
      return {
        // Count of items in cart
        count: function() {
          var myCount = parseInt(localStorage.count);
          return myCount;
        },

        // Add item to cart
        add: function (obj) {
          console.log(obj.name + ' added to cart. Cost of $' + obj.price);
          cartItems.push(obj);
          this.updateCount();
        },

        get: function () {
          return cartItems;
        },

        //update count
        updateCount: function() {
          var currentCount = parseInt(this.count());
          localStorage.count = currentCount + 1;
        },
        
        // Delete Cart
        deleteCart: function() {
	        localStorage.count = 0;
          cartItems= [];
        }
      }
  });