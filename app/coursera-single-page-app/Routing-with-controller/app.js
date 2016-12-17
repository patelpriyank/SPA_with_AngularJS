var angular = require("angular");
require("angular-ui-router");
var shoppingListComponent = require('./ShoppingList/shoppinglist-component/shoppinglist.module');

module.exports = angular.module("RoutingShoppingListApp", ['ui.router', shoppingListComponent.name])
    .config(require('./app.routes'))
    .controller('MainShoppingListCtrl', require('./ShoppingList/main-shoppinglist.controller'))
    .provider("ShoppingListService", require("../../common/services/shoppinglist.service"))
    .service('WeightLossFilterService', require("../../common/services/weightlossfilter.service"))
    ;