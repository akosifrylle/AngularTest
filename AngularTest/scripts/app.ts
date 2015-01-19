module MyApp {
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
        '$routeProvider', ($routeProvider: ng.route.IRouteProvider) => {
            $routeProvider
                .when('/Home', {
                    templateUrl: '/partialviews/home.html',
                    controller: 'HomeController as homeCtrl'
                })
                .otherwise({ redirectTo: '/Home' });
        }
    ]);

    app.directive('multiselectvalidator', () => {
        return {
            require: 'ngModel',
            link: (scope, elm, attrs, ctrl) => {
                ctrl.$validators.multiselectvalidator = (modelValue, viewValue) => {

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
    //.directive('datetimevalidator', () => {
    //    return {
    //        require: 'ngModel',
    //        link: (scope, elem, attrs, ctrl) => {
    //            ctrl.$validators.datetimevalidator = (modelValue: string, viewValue: string) => {
    //                if (viewValue) {
    //                    var values = viewValue.split(',');
    //                    if (values.length <= 2) {
    //                        return true;
    //                    } else {
    //                        return false;
    //                    }
    //                }
    //                return false;
    //            };
    //        }
    //    };
    //});
}