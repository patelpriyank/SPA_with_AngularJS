var angular = require("angular");
var shoppingListComponentModule = require("./shopping-list-component/shopping-list.module"); 
var spinnerModule = require("./spinner-component/spinner.module");

module.exports = angular.module("ShoppingListEventsApp", [shoppingListComponentModule.name, spinnerModule.name])
.controller("AppController", require("./app.controller"))
.provider("ShoppingListService", require("../../common/services/shoppinglist.service"))
.service('WeightLossFilterService', require("../../common/services/weightlossfilter.service"))
;
