module.exports = angular.module('ShoppingListModule', [])
    .component('shoppingList', {
        templateUrl: './ShoppingList/shoppinglist-component/shoppinglist.template.html',
        bindings: {
            items: '<'
        }
    });