/// <reference path="../typings/jqueryui/jqueryui.d.ts" />

module MyApp.Controllers {
    export class HomeController {
        private colors: Object[];
        private players: Object[];
        private formData: MyApp.Models.FormData;
        private dateTime: Date;
        private isSubmitting: boolean;
        private label: string;
        private opened: boolean;
        private response: MyApp.Models.Response;
        private percent: number;
        private scorePercent: number;
        private isReady: boolean;
        private scorePercentOpts;

        constructor(
            private $scope: ng.IScope,
            private unnamedService: MyApp.Services.UnnamedService) {

            this.formData = new MyApp.Models.FormData();

            $("#formCollapse").collapse();
            $("#resultCollapsse").collapse({
                toggle: false
            });

            $("#dateTimePicker").datetimepicker();

            this.initializeForm();
            this.initializeResult();

            $('#formCollapse').on('shown.bs.collapse', () => {
                this.initializeForm();
                this.$scope.$apply();
            });

            $("#dateTimePicker").on('change.dp', () => {
                var value = $("#actualDate").val();
                this.formData.selectedDateTime = value;
            });
        }

        public initializeForm() {
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
        }

        public initializeResult() {
            $('#resultCollapsse').on('shown.bs.collapse', () => {
                this.percent = 100;
                this.scorePercentOpts = {
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

                this.isReady = true;
                this.$scope.$apply();
            });
        }

        public submit() {
            this.isSubmitting = true;
            this.label = "Submitting";

            setTimeout(() => {
                $("#formCollapse").collapse('toggle');
                $("#resultCollapsse").collapse('toggle');

                this.unnamedService.getData().then((data) => {
                    this.response = data;
                }, (error) => {
                        console.error(error);
                    });
            }, 2000);

        }
        public open($event) {
            $event.preventDefault();
            $event.stopPropagation();
            this.opened = true;
        }

        public resubmit() {
            $("#formCollapse").collapse('toggle');
            $("#resultCollapsse").collapse('toggle');
        }
    }

    angular.module('myApp')
        .controller('HomeController', [
            '$scope',
            'UnnamedService',
            HomeController
        ]);
}