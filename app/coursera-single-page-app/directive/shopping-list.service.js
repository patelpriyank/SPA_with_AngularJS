function ShoppingService(maxItems) {
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
            console.log("Added item: ", item);
        }
        else {
            throw new Error("Max items (" + maxItems + ") reached.");
        }
    };

    slsService.removeItem = function(itemIndex) {
        console.log("Removing item: ", items[itemIndex]);
        items.splice(itemIndex, 1);
    };

    slsService.getItems = function() {
        return items;
    };
}


module.exports =  function ShoppingListServiceProvider() {
    var provider = this;

    provider.defauls = {
        maxItems: 10
    };

    provider.$get = function() {
        return new ShoppingService(provider.defauls.maxItems);
    };
};

/*
module.exports =  function ShoppingListFactory() {
    var factory = function(maxItems) {
        return new ShoppingService(maxItems);
    };

    return factory;
};
*/