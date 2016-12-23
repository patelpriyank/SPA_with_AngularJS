var angular = require("angular");
var uiRouter = require("angular-ui-router");

module.exports = angular.module("RoutingApp", ['ui.router'])
    .config(require('./app.routes'));
