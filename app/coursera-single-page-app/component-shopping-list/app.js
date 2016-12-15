var angular = require("angular");
var shoppingListComponentModule = require("./shopping-list.module"); 

module.exports = angular.module("ShoppingListComponentApp", [shoppingListComponentModule.name])
.controller("AppController", require("./app.controller"))
.provider("ShoppingListService", require("./shopping-list.service"))
;