var shoppingListModule = angular.module('ShoppingListModule', [])
    .component('shoppingList', {
        templateUrl: './ShoppingList/shoppinglist-component/shoppinglist.template.html',
        bindings: {
            items: '<'
        }
    })
    .controller('ItemDetailCtrl', require('./itemdetail.controller.js'));

shoppingListModule.run(['$rootScope', function($rootScope){
    console.log("shoppingListModule run");

    $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
        console.log("stateChangeError happened");
        /*
        if(toState.name == 'Categories') {
            // Do Something
        }
        */
    });
}]);

module.exports = shoppingListModule;

