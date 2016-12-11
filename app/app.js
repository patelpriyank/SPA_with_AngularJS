var angular = require('angular');

//phone-list module
var phonelistModule = require("./common/phone-list/phone-list.module");
var phonecatApp = angular.module("phonecatApp", [phonelistModule.name]);

//coursera-single-page-app Directive module
require("./coursera-single-page-app/directive/directive-app");

//Async behavior with promise, $q
require("./coursera-single-page-app/async-promises-$q/promise-app");