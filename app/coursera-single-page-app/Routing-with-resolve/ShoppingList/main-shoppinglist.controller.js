var mainShoppingListCtrl = function RWRShoppingListCtrl(items) {
    console.log("RWRShoppingListCtrl items: ", items)
    var $ctrl = this;
    $ctrl.items = items;
};
mainShoppingListCtrl.$inject = ['items'];
module.exports = mainShoppingListCtrl;