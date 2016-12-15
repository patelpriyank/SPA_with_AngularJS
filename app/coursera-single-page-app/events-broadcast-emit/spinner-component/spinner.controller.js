var spinnerCtrl = function SpinnerController($rootScope) {
    var sCtrl = this;
    
    sCtrl.$oninit = function () {
        console.log("spinnerCtrl initialization..")
        sCtrl.showSpinner = false;
    };

    var cancelSpinner = $rootScope.$on("shoppingList:processing", function(event, data) {
        console.log("Event: ", event);
        console.log("Data: ", data);
        if (data.on) {
            sCtrl.showSpinner = true;
        }
        else {
            sCtrl.showSpinner = false;
        }
    });

    sCtrl.$onDestroy = function () {
        cancelSpinner();
    };
};
spinnerCtrl.$inject = ['$rootScope'];
module.exports = spinnerCtrl;
