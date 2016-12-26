var spinnerCtrl = function SpinnerController($rootScope) {
    var $ctrl = this;
    $ctrl.showSpinner = false;
    var cancellers = [];
    
    $ctrl.$onInit = function () {
        var cancel = $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams, options) {
            console.log("stateChangeStart");
            $ctrl.showSpinner = true;
        });
        cancellers.push(cancel);

        cancel = $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
            console.log("stateChangeSuccess");
            $ctrl.showSpinner = false;
        });
        cancellers.push(cancel);

        cancel = $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
            console.log("stateChangeError");
            $ctrl.showSpinner = false;
        });
        cancellers.push(cancel);

        cancel = $rootScope.$on('$stateNotFound', function(event, unfoundState, fromState, fromParams) {
            console.log("stateNotFound");
            $ctrl.showSpinner = false;
        });
        cancellers.push(cancel);

    }; //end of $oninit

    $ctrl.$onDestroy = function() {
        console.log("onDestroy");
        cancellers.foreach(function(cancel) {
            cancel();
        });
    };
   
};
spinnerCtrl.$inject = ['$rootScope'];
module.exports = spinnerCtrl;
