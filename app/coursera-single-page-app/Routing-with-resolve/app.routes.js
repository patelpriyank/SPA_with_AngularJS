var config = function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home', {
        url: '/',
        templateUrl: 'ShoppingList/home.template.html'
    })
    .state('mainList', {
        templateUrl: 'ShoppingList/main-shoppinglist.template.html',
        url: '/main-list',
        controller: 'RWRShoppingListCtrl as rwrMslCtrl',
        resolve: {
            items: ['ShoppingListService', function(ShoppingListService) {
                //ui-router will wait for promise to finish before returning data.
                return ShoppingListService.getItemsDeferred();
                //NOTE: To catch error in resolve, follow this https://github.com/angular-ui/ui-router/issues/1783
            }]
        }
    });

};
config.$inject = ['$stateProvider', '$urlRouterProvider'];
module.exports = config;