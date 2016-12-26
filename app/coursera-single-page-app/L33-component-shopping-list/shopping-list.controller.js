var shoppingListCompCtrl = function ShoppingListComponentController($element) {
    var slcCtrl = this;
    var totalItems;

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

    /*** controller's lifecycle events ****/
    slcCtrl.$onInit = function() {
        totalItems = 0;
    };

    slcCtrl.$onChanges = function(changeObj) {
        console.log("Changes: ", changeObj);
    };

    /*
    $doCheck() - Called on each turn of the digest cycle. Provides an opportunity to detect and act on changes. Any actions that you wish to take in response to the changes that you detect must be invoked from this hook; implementing this has no effect on when $onChanges is called. For example, this hook could be useful if you wish to perform a deep equality check, or to check a Date object, changes to which would not be detected by Angular's change detector and thus not trigger $onChanges. This hook is invoked with no arguments; if detecting changes, you must store the previous value(s) for comparison to the current values.
     */
    
    slcCtrl.$doCheck = function() {
        if(slcCtrl.items.length != totalItems) {
            console.log("# of items changed. Checking for Cookies!");
            totalItems = slcCtrl.items.length;

            console.log('$element: ', $element);
            var warningElement = $element.find('div');
            console.log("Error div: ", warningElement);
            if(slcCtrl.cookiesInList()) {
                console.log("Oh, NO! COOKIES!!!!!");
                warningElement.class = 'errordisplay';
                //warningElement.slideDown(900);
            }
            else {
                console.log("No cookies here. Move right along!");
                //warningElement.slideUp(900);         
                warningElement.class = 'error';       
            }
        }
    };
    

}; //end of controller
shoppingListCompCtrl.$inject = ['$element'];
module.exports = shoppingListCompCtrl;