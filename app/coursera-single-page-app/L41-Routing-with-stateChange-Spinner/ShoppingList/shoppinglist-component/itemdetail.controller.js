var itemDetailCtrl = function ItemDetailCtrl($stateParams, items, $timeout) {
    var $ctrl = this;
    var item = items[$stateParams.itemId];
    /* Note:- This timeout has no impact on showing spinner because state resolution happens immediately.
              Unlike, resolving 'mainList' with ShoppingListCtrl because state transition has to wait for 
              resolve option to finish before it can transition to new state. Thus, spinner shows up when 
              transitioning from home to mainList but not from mainList to itemDetail
     */
    $timeout(function() {
        $ctrl.name = item.name;
        $ctrl.quantity = item.quantity;
        $ctrl.description = item.description;
    }, 1000);
};

itemDetailCtrl.$inject = ['$stateParams', 'items', '$timeout'];
module.exports = itemDetailCtrl;