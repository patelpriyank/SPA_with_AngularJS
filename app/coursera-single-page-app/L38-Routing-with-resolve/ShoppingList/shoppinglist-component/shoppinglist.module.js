var shoppingListModule = angular.module('ShoppingListModule', [])
    .component('shoppingList', {
        templateUrl: './ShoppingList/shoppinglist-component/shoppinglist.template.html',
        bindings: {
            items: '<'
        }
    });

/*
Here's the calling order:

app.config()
app.run()
directive's compile functions (if they are found in the dom)
app.controller()
directive's link functions (again, if found)
 */

shoppingListModule.config( function() {
    console.log("shoppingListModule config");
});

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

