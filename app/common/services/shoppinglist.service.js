function ShoppingService(maxItems, $q, $timeout) {
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

    slsService.getItemsDeferred = function() {

        var itemsDeferred = [];
        // Pre-populate a no cookie list
        itemsDeferred.push({
            name: "Sugar",
            quantity: "2 bags",
            description: "Sugar used for baking delicious umm... baked goods."
        });
        itemsDeferred.push({
            name: "flour",
            quantity: "1 bags",
            description: "High quality wheat flour. Mix it with water, sugar, 2 raw eggs."
        });
        itemsDeferred.push({
            name: "Chocolate Chips",
            quantity: "3 bags",
            description: "Put these in the dough. No reason, really. Gotta store them somewhere!"
        });
        
        var deferred = $q.defer();

        /* Invokes $stateChangeError through resolve in app.routes
        deferred.reject("testing rejection");
        return deferred.promise;
        */

        $timeout(function() {
            deferred.resolve(itemsDeferred);
        }, 800);

        return deferred.promise;
    };
}


var slsProvider = function ShoppingListServiceProvider() {
    var provider = this;

    provider.defauls = {
        maxItems: 10
    };

    provider.$get = function($q, $timeout) {
        return new ShoppingService(provider.defauls.maxItems, $q, $timeout);
    };
    provider.$get.$inject = ['$q', '$timeout'];
};

module.exports = slsProvider;

/*
module.exports =  function ShoppingListFactory() {
    var factory = function(maxItems) {
        return new ShoppingService(maxItems);
    };

    return factory;
};
*/