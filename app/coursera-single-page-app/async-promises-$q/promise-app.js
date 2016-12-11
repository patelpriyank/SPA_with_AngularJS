var angular = require("angular");
module.exports = angular.module("ShoppingListPromiseApp", [])
.controller("ShoppingListPromiseController", require("./shopping-list-promise.controller"))
.service('ShoppingListService', require("./shopping-list.service"))
.service('WeightLossFilterService', require("./weightlossfilter.service"));