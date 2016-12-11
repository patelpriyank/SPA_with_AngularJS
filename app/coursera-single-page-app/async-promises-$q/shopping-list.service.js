var shoppingListService = function ShoppingListService($q, WeightLossFilterService) {
    var slSvc = this;
    var items = [];

    slSvc.addItem = function(name, quantity) {
        console.log("WeightLossFilterService: ", WeightLossFilterService);
        var namePromise = WeightLossFilterService.checkName(name);
        var quantityPromise = WeightLossFilterService.checkQuantity(quantity);

        /** Reference: https://www.martin-brennan.com/using-q-all-to-resolve-multiple-promises/ */
        var myPromises = {
            name: namePromise,
            quantity: quantityPromise
        };
        
        //$q.all([namePromise, quantityPromise])
        $q.all(myPromises).then(function(responses){ //TODO: check how to handle responses from multiple promises
            //console.log("responses[0]: ", responses[0]);
            //console.log("responses[1]: ", responses[1]);
            console.log("responses.name: ", responses.name);
            console.log("responses.quantity: ", responses.quantity);
            items.push({
                Name: name,
                Quantity: quantity
            });

            
        })
        .catch(function(error) {
            console.log(error);
        });
    };

    slSvc.removeItem = function(index) {
        items.splice(index, 1);
    };

    slSvc.getItems = function () {
        return items;
    };
};
shoppingListService.$inject = ['$q', 'WeightLossFilterService'];
module.exports = shoppingListService;