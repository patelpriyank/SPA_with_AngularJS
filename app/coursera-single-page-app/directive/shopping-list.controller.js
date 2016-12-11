var shoppingListCtrl = function ShoppingListController(ShoppingListFactory) {
    var list = this;

    // Use factory to create new shopping list service
    var shoppingList = ShoppingListFactory();

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

shoppingListCtrl.$inject = ['ShoppingListFactory'];

module.exports = shoppingListCtrl;
