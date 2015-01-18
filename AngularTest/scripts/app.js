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
})(MyApp || (MyApp = {}));
//# sourceMappingURL=app.js.map
