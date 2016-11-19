'use strict';
var angular = require('angular');
var phonelistModule = require("./common/phone-list/phone-list.module");
var phonecatApp = angular.module("phonecatApp", [phonelistModule.name]);