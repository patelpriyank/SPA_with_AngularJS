var mainShoppingListCtrl = function ShoppingListCtrl(items) {
    console.log("ShoppingListCtrl items: ", items)
    var $ctrl = this;
    $ctrl.items = items;
};
mainShoppingListCtrl.$inject = ['items'];
module.exports = mainShoppingListCtrl;