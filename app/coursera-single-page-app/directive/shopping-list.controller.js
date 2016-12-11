var shoppingListCtrl = function ShoppingListController(ShoppingListService) {
    var list = this;

    /* with factory definition, user () to execute the function and get service instance
    var shoppingList = ShoppingListService();
     */
    
    // provider's $get returns service instance so no need to execute any function with () like factover one above
    var shoppingList = ShoppingListService;

    list.items = shoppingList.getItems();
    var origTitle = "Shopping List #1";
    list.title = origTitle + " (" + list.items.length + " items )";

    list.itemName = "";
    list.itemQuantity = "";

    list.addItem = function () {
      console.log("'this' is: ", this);
      shoppingList.addItem(list.itemName, list.itemQuantity);
      list.title = origTitle + " (" + list.items.length + " items )";
      console.log("List is now: ", shoppingList.getItems());
    };

    list.removeItem = function (itemIndex) {
      console.log("'this' is: ", this);
      this.lastRemoved = "Last item removed was " + this.items[itemIndex].name;
      shoppingList.removeItem(itemIndex);
      this.title = origTitle + " (" + list.items.length + " items )";
    };
};

shoppingListCtrl.$inject = ['ShoppingListService'];

module.exports = shoppingListCtrl;
