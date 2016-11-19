var angular = require('angular');
var phonelistCtrl = require('./phone-list.controller');

var phonelistModule = angular.module("phoneList", []);

phonelistModule.component("phoneList", {
    templateUrl: "common/phone-list/phone-list.template.html",
    controller: phonelistCtrl
});

module.exports = phonelistModule;