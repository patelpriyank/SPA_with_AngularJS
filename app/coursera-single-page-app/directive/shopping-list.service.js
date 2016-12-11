function ShoppingListService(maxItems) {
    var slsService = this;
    var items = [];
    slsService.addItem = function (itemName, quantity) {
        if ((maxItems === undefined) ||
            (maxItems !== undefined) && (items.length < maxItems)) {
            var item = {
                name: itemName,
                quantity: quantity
            };
            items.push(item);
        }
        else {
            throw new Error("Max items (" + maxItems + ") reached.");
        }
    };

    slsService.removeItem = function(itemIndex) {
        items.splice(itemIndex, 1);
    };

    slsService.getItems = function() {
        return items;
    };
}


var shoppingListFactory = function ShoppingListFactory() {
        var factory = function(maxItems) {
            return new ShoppingListService(maxItems);
        };

        return factory;
    };

module.exports = shoppingListFactory;