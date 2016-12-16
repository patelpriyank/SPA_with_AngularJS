var angular = require('angular');

//phone-list module
var phonelistModule = require("./common/phone-list/phone-list.module");
var phonecatApp = angular.module("phonecatApp", [phonelistModule.name]);

//coursera-single-page-app Directive module
require("./coursera-single-page-app/directive/app");

//Async behavior with promise, $q
require("./coursera-single-page-app/async-promises-$q/app");

//component based architecture
require("./coursera-single-page-app/component-shopping-list/app");

//events system: $broadcast & $emit
require("./coursera-single-page-app/events-broadcast-emit/app");

//Single page app: routing with ui-router
require("./coursera-single-page-app/Routing/app");