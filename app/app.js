var angular = require('angular');

//phone-list module
var phonelistModule = require("./common/phone-list/phone-list.module");
var phonecatApp = angular.module("phonecatApp", [phonelistModule.name]);

//coursera-single-page-app Directive module
require("./coursera-single-page-app/1-directive/app");

//Async behavior with promise, $q
require("./coursera-single-page-app/2-async-promises-$q/app");

//component based architecture
require("./coursera-single-page-app/3-component-shopping-list/app");

//events system: $broadcast & $emit
require("./coursera-single-page-app/4-events-broadcast-emit/app");

//Single page app: routing with ui-router
require("./coursera-single-page-app/5-Routing/app");

require("./coursera-single-page-app/6-Routing-with-controller/app");
require("./coursera-single-page-app/7-Routing-with-resolve/app");
require("./coursera-single-page-app/8-Routing-with-URLParam/app");
require("./coursera-single-page-app/9-Routing-with-childview/app");
require("./coursera-single-page-app/10-Routing-with-stateChange-Spinner/app");