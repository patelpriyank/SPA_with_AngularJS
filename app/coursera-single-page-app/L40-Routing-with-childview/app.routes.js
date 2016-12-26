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
        controller: require('./ShoppingList/main-shoppinglist.controller'),
        controllerAs: 'mslCtrl',
        resolve: {
            items: ['ShoppingListService', function(ShoppingListService) {
                //ui-router will wait for promise to finish before returning data.
                return ShoppingListService.getItemsDeferred();
            }]
        }
    })
    .state('mainList.itemDetail', {
        templateUrl: 'ShoppingList/shoppinglist-component/itemdetail.template.html',
        url: '/item-detail/{itemId}',
        controller: require('./ShoppingList/shoppinglist-component/itemdetail.controller'),
        controllerAs: 'idCtrl',
        params: {
            itemId: null
        }
    });

};
config.$inject = ['$stateProvider', '$urlRouterProvider'];
module.exports = config;