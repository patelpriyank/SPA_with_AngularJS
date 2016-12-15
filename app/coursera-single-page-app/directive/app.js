var angular = require("angular");
module.exports = angular.module("ShoppingListDirectiveApp", [])
    .controller('AppController', require("./app.controller"))
    //.factory('ShoppingListService', require("./shopping-list.service"))
    .provider('ShoppingListService', require("./shopping-list.service"))
    .directive('shoppingList', require('./shopping-list-directive'));