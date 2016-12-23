var itemDetailCtrl = function ItemDetailCtrl($stateParams, items) {
    var $ctrl = this;
    var item = items[$stateParams.itemId];
    $ctrl.name = item.name;
    $ctrl.quantity = item.quantity;
    $ctrl.description = item.description;
};

itemDetailCtrl.$inject = ['$stateParams', 'items'];
module.exports = itemDetailCtrl;