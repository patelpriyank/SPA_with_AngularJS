module.exports = function ShoppingListDirectiveController() {
    var sldCtrl = this;

    sldCtrl.cookiesInList = function() {
        console.log('cookiesInList');
        for (var i = 0; i < sldCtrl.items.length; i++) {
            var name = sldCtrl.items[i].name;
            if (name.toLowerCase().indexOf("cookie") !== -1) {
                return true;
            }
        }
        return false;
    };
};