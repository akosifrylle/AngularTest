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
}