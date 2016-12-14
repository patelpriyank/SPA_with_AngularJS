var angular = require('angular');

module.exports = angular.module("phoneListModule", [])
    .component("phoneList", {
        templateUrl: "phone-list.template.html",
        controller: require('./phone-list.controller')
    });