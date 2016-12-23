var itemDetailCtrl = function ItemDetailCtrl(item) {
    var $ctrl = this;
    $ctrl.name = item.name;
    $ctrl.quantity = item.quantity;
    $ctrl.description = item.description;
};

itemDetailCtrl.$inject = ['item'];
module.exports = itemDetailCtrl;