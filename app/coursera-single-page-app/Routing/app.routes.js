var config = function($stateProvider, $urlRouterProvider) {
    // Redirect to tab 1 if no other URL matches
    $urlRouterProvider.otherwise("/tab1");

    $stateProvider.state('tab1', {
        url: '/tab1',
        templateUrl: 'views/tab1.html'
    })

    .state('tab2', {
        url: '/tab2',
        templateUrl: 'views/tab2.html'
    });
};
config.$inject = ['$stateProvider', '$urlRouterProvider'];
module.exports = config;