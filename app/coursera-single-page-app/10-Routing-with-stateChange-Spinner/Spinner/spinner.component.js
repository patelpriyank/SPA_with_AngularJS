module.exports = angular.module("SpinnerModule", [])
.component("loadingSpinner", {
    templateUrl: "./Spinner/spinner.template.html",
    controller: require("./spinner.controller")
});
