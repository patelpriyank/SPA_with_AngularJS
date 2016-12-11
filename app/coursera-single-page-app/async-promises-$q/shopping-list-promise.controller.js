var shoppingListPromiseCtrl = function ShoppingListPromiseController(ShoppingListService) {
    var slpCtrl = this;
    slpCtrl.itemName = "";
    slpCtrl.itemName = "";
    slpCtrl.items = ShoppingListService.getItems();

    slpCtrl.addItem = function() {
        console.log("addItem: ", this);
        ShoppingListService.addItem(slpCtrl.itemName, slpCtrl.itemQuantity);
    };

    slpCtrl.removeItem = function(index) {
        ShoppingListService.removeItem(index);
    };
};
shoppingListPromiseCtrl.$inject = ['ShoppingListService'];
module.exports = shoppingListPromiseCtrl;