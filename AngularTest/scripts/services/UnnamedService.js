var MyApp;
(function (MyApp) {
    (function (Services) {
        var UnnamedService = (function () {
            function UnnamedService(restangular) {
                this.restangular = restangular;
                this.unnamedService = restangular.allUrl('code360', 'http://www.code360.com.au/assessment/fe');
            }
            UnnamedService.prototype.getData = function () {
                return this.unnamedService.getList();
            };
            return UnnamedService;
        })();
        Services.UnnamedService = UnnamedService;

        angular.module('myApp').service('UnnamedService', [
            'Restangular',
            UnnamedService]);
    })(MyApp.Services || (MyApp.Services = {}));
    var Services = MyApp.Services;
})(MyApp || (MyApp = {}));
//# sourceMappingURL=UnnamedService.js.map
