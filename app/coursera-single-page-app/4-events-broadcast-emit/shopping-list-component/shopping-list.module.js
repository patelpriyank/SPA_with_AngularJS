module.exports = angular.module("shoppingListModule", [])
    .component("shoppingList", {
        templateUrl: "./shopping-list-component/shopping-list.template.html",
        controller: require("./shopping-list.controller"),
        bindings: {
            myTitle: '@title',
            items: '<',
            onRemove: '&'
        }
    });