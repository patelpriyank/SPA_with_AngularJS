var mainShoppingListCtrl = function MainShoppingListCtrl(ShoppingListService) {
    var $ctrl = this;
    $ctrl.items = [];

    $ctrl.$onInit = function() {
        console.log($ctrl);
        ShoppingListService.getItemsDeferred()
        .then(function(result){
            console.log(result);
            $ctrl.items = result;
        });
    };
    
};
mainShoppingListCtrl.$inject = ['ShoppingListService'];
module.exports = mainShoppingListCtrl;