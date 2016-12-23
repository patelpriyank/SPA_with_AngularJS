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
        controller: 'ShoppingListCtrl as mslCtrl',
        resolve: {
            items: ['ShoppingListService', function(ShoppingListService) {
                //ui-router will wait for promise to finish before returning data.
                return ShoppingListService.getItemsDeferred();
            }]
        }
    })
    .state('itemDetail', {
        templateUrl: 'ShoppingList/shoppinglist-component/itemdetail.template.html',
        url: '/item-detail/{itemId}',
        controller: 'ItemDetailCtrl as idCtrl',
        resolve: {
            item: ['$stateParams', 'ShoppingListService', function($stateParams, ShoppingListService) {
                return ShoppingListService.getItemsDeferred()
                        .then(function(items) {
                            return items[$stateParams.itemId];
                        });
            }]
        }
    });

};
config.$inject = ['$stateProvider', '$urlRouterProvider'];
module.exports = config;