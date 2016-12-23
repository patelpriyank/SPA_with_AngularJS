module.exports = angular.module("spinnerIconModule", [])
.component("spinnerIcon", {
    templateUrl: "./spinner-component/spinner.html",
    controller: require("./spinner.controller")
});
