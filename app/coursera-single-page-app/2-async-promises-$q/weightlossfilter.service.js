var weightLossFilterService = function WeightLossFilterService($q, $timeout) {
    var wlfSvc = this;

    wlfSvc.checkName = function(name) {
        var deferred = $q.defer();
        var result = {
            message: ""
        };

        $timeout(function() {
            if (name.toLowerCase().indexOf('cookie') === -1) {
                result.message = "Eat them all man!!";
                deferred.resolve(result);
            }
            else {
                result.message = "Stay away from cookies, Priyank!!";
                deferred.reject(result);
            }
        }, 3000);

        return deferred.promise;
    };

    wlfSvc.checkQuantity = function(quantity) {
        var deferred = $q.defer();
        var result = "";

        console.log("quantity: ", quantity);
        $timeout(function(){
            if (quantity < 6) {
                deferred.resolve("Under control quantity");
            }
            else {
                deferred.reject("High Sugar Alert!! Lower your quantity");
            }
        }, 1000);

        return deferred.promise;
    };
};

weightLossFilterService.$inject = ['$q', '$timeout'];
module.exports = weightLossFilterService;