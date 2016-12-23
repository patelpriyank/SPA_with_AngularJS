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
        controller: 'MainShoppingListCtrl as mslCtrl'
    });

};
config.$inject = ['$stateProvider', '$urlRouterProvider'];
module.exports = config;