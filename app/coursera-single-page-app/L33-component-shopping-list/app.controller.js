var appController = function AppController(ShoppingListService) {
    var appCtr = this;
    
    appCtr.items = ShoppingListService.getItems();
    
    var origTitle = "Shopping List #1";
    appCtr.title = origTitle + " (" + appCtr.items.length + " items )";

    appCtr.itemName = "";
    appCtr.itemQuantity = "";

    appCtr.addItem = function() {
        console.log("ShoppingListService: ", ShoppingListService);
        ShoppingListService.addItem(appCtr.itemName, appCtr.itemQuantity);
        appCtr.title = origTitle + " (" + appCtr.items.length + " items )";
    };

    appCtr.removeItem = function(index) {
        appCtr.lastRemoved = "Last item removed was " + appCtr.items[index].name;
        ShoppingListService.removeItem(index);
        appCtr.title = origTitle + " (" + appCtr.items.length + " items )";
    };
};
appController.$inject = ['ShoppingListService'];
module.exports = appController;