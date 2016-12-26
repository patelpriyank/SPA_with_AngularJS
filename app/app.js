var angular = require('angular');

//phone-list module
var phonelistModule = require("./common/phone-list/phone-list.module");
var phonecatApp = angular.module("phonecatApp", [phonelistModule.name]);

//Async behavior with promise, $q
require("./coursera-single-page-app/L24-async-promises-$q/app");

//coursera-single-page-app Directive module
require("./coursera-single-page-app/L26-directive/app");

//component based architecture
require("./coursera-single-page-app/L33-component-shopping-list/app");

//events system: $broadcast & $emit
require("./coursera-single-page-app/L34-events-broadcast-emit/app");

//Single page app: routing with ui-router
require("./coursera-single-page-app/L36-Routing/app");

require("./coursera-single-page-app/L37-Routing-with-controller/app");
require("./coursera-single-page-app/L38-Routing-with-resolve/app");
require("./coursera-single-page-app/L39-Routing-with-URLParam/app");
require("./coursera-single-page-app/L40-Routing-with-childview/app");
require("./coursera-single-page-app/L41-Routing-with-stateChange-Spinner/app");