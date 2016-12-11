module.exports = function ShoppingListDirective() {
    var ddo = {
        templateUrl: 'shopping-list-directive.template.html',
        scope: {
            items: '<',
            myTitle: '@title',
            badRemove: '=',
            onRemove: '&'
        },
        controller: require('./shopping-list-directive.controller'),
        controllerAs: 'slCtrl',
        bindToController: true
    };
    return ddo;
};