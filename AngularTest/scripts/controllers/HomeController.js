/// <reference path="../typings/jqueryui/jqueryui.d.ts" />
var MyApp;
(function (MyApp) {
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController($scope, unnamedService) {
                var _this = this;
                this.$scope = $scope;
                this.unnamedService = unnamedService;
                this.formData = new MyApp.Models.FormData();

                $("#formCollapse").collapse();
                $("#resultCollapsse").collapse({
                    toggle: false
                });

                $("#dateTimePicker").datetimepicker();

                this.initializeForm();
                this.initializeResult();

                $('#formCollapse').on('shown.bs.collapse', function () {
                    _this.initializeForm();
                    _this.$scope.$apply();
                });

                $("#dateTimePicker").on('change.dp', function () {
                    var value = $("#actualDate").val();
                    _this.formData.selectedDateTime = value;
                });
            }
            HomeController.prototype.initializeForm = function () {
                this.label = "Submit";
                this.isReady = false;

                this.colors = ['Blue', 'Green', 'Red', 'Orange', 'Purple', 'Brown'];

                this.players = [
                    { id: 0, text: 'LeBron James' },
                    { id: 1, text: 'Michael Clarke' },
                    { id: 2, text: 'Kobe Bryant' },
                    { id: 3, text: 'Julius Irving' },
                    { id: 4, text: 'Nick Young' },
                    { id: 5, text: 'Paul Pierce' }
                ];
            };

            HomeController.prototype.initializeResult = function () {
                var _this = this;
                $('#resultCollapsse').on('shown.bs.collapse', function () {
                    _this.percent = 100;
                    _this.scorePercentOpts = {
                        animate: {
                            duration: 1000,
                            enabled: true
                        },
                        size: 150,
                        barColor: '#00ff00',
                        scaleLength: 2,
                        scaleColor: '#00ff00',
                        lineWidth: 23,
                        lineCap: 'butt'
                    };

                    _this.isReady = true;
                    _this.$scope.$apply();
                });
            };

            HomeController.prototype.submit = function () {
                var _this = this;
                this.isSubmitting = true;
                this.label = "Submitting";

                setTimeout(function () {
                    $("#formCollapse").collapse('toggle');
                    $("#resultCollapsse").collapse('toggle');

                    _this.unnamedService.getData().then(function (data) {
                        _this.response = data;
                    }, function (error) {
                        console.error(error);
                    });
                }, 2000);
            };
            HomeController.prototype.open = function ($event) {
                $event.preventDefault();
                $event.stopPropagation();
                this.opened = true;
            };

            HomeController.prototype.resubmit = function () {
                $("#formCollapse").collapse('toggle');
                $("#resultCollapsse").collapse('toggle');
            };
            return HomeController;
        })();
        Controllers.HomeController = HomeController;

        angular.module('myApp').controller('HomeController', [
            '$scope',
            'UnnamedService',
            HomeController
        ]);
    })(MyApp.Controllers || (MyApp.Controllers = {}));
    var Controllers = MyApp.Controllers;
})(MyApp || (MyApp = {}));
//# sourceMappingURL=HomeController.js.map
