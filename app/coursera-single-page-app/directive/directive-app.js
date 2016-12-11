var angular = require("angular");
module.exports = angular.module("ShoppingListDirectiveApp", [])
    //.factory('ShoppingListService', require("./shopping-list.service"))
    .provider('ShoppingListService', require("./shopping-list.service"))
    .controller('ShoppingListController', require("./shopping-list.controller"))
    .directive('shoppingList', require('./shopping-list-directive'));