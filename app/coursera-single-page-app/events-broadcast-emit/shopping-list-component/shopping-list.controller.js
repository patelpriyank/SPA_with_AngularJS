var shoppingListCompCtrl = function ShoppingListComponentController($rootScope, $element, $q, WeightLossFilterService) {
    var slcCtrl = this;
    var totalItems;

    /*** controller's lifecycle events ****/
    
    slcCtrl.$onInit = function() {
        console.log("ShoppingListComponentController initialization..")
        totalItems = 0;
    };

    slcCtrl.$onChanges = function(changeObj) {
        console.log("ShoppingListComponentController onChanges: ", changeObj);
    };

    slcCtrl.$doCheck = function () {
        if (slcCtrl.items.length !== totalItems) {
        totalItems = slcCtrl.items.length;
        console.log("broadcasting...");
        $rootScope.$broadcast('shoppingList:processing', {on: true});
        var promises = [];
        for (var i = 0; i < slcCtrl.items.length; i++) {
            promises.push(WeightLossFilterService.checkName(slcCtrl.items[i].name));
            promises.push(WeightLossFilterService.checkQuantity(slcCtrl.items[i].quantity));
        }

        $q.all(promises)
        .then(function (result) {
            console.log("all promises completed.");
            // Remove cookie warning
            var warningElem = $element.find('div.error');
            //warningElem.slideUp(900);
        })
        .catch(function (error) {
            console.log("error in promises: ", error);
            // Show cookie warning
            var warningElem = $element.find('div.error');
            //warningElem.slideDown(900);
        })
        .finally(function () {
            console.log("stop broadcasting...")
            $rootScope.$broadcast('shoppingList:processing', { on: false });
        });
        }
    };

    slcCtrl.cookiesInList = function() {
            for (var i = 0; i < slcCtrl.items.length; i++) {
                var name = slcCtrl.items[i].name;
                if (name.toLowerCase().indexOf("cookie") !== -1) {
                    return true;
                }
            }
            return false;
        };

    slcCtrl.remove = function(itemIndex) {
        slcCtrl.onRemove({index: itemIndex});
    };

};

shoppingListCompCtrl.$inject = ['$rootScope', '$element', '$q', 'WeightLossFilterService']
module.exports = shoppingListCompCtrl;