var angular = require('angular');

//phone-list module
var phonelistModule = require("./common/phone-list/phone-list.module");
var phonecatApp = angular.module("phonecatApp", [phonelistModule.name]);

//coursera-single-page-app Directive module
var shoppingListDirectiveAppModule = require("./coursera-single-page-app/directive/directive-app");