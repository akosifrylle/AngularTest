var MyApp;
(function (MyApp) {
    var app = angular.module('myApp', [
        'ngResource',
        'ngSanitize',
        'ngRoute',
        'ui.select',
        'ui.bootstrap',
        'easypiechart',
        'restangular'
    ]);

    app.config([
        '$routeProvider', function ($routeProvider) {
            $routeProvider.when('/Home', {
                templateUrl: '/partialviews/home.html',
                controller: 'HomeController as homeCtrl'
            }).otherwise({ redirectTo: '/Home' });
        }
    ]);

    app.directive('multiselectvalidator', function () {
        return {
            require: 'ngModel',
            link: function (scope, elm, attrs, ctrl) {
                ctrl.$validators.multiselectvalidator = function (modelValue, viewValue) {
                    if (ctrl.$isEmpty(modelValue)) {
                        // empty models are not valid
                        return false;
                    }

                    if (modelValue.length == 2) {
                        return true;
                    }
                    return false;
                };
            }
        };
    });
})(MyApp || (MyApp = {}));
//# sourceMappingURL=app.js.map
