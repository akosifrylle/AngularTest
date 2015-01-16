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

            $("#formCollapse").collapse();
            $("#resultCollapsse").collapse({
                toggle: false
            });

            this.initializeForm();
            this.initializeResult();

            $('#formCollapse').on('shown.bs.collapse', () => {
                this.initializeForm();
                this.$scope.$apply();
            });

        }

        public initializeForm() {
            this.label = "Submit";
            this.isReady = false;
            
            this.colors = [
                { id: 0, text: 'Blue' },
                { id: 1, text: 'Green' },
                { id: 2, text: 'Red' },
                { id: 3, text: 'Orange' },
                { id: 4, text: 'Purple' },
                { id: 5, text: 'Brown' }
            ];

            this.players = [
                { id: 0, text: 'LeBron James' },
                { id: 1, text: 'Michael Clarke' },
                { id: 2, text: 'Kobe Bryant' },
                { id: 3, text: 'Julius Irving' },
                { id: 4, text: 'Nick Young' },
                { id: 5, text: 'Paul Pierce' }
            ];

            $("#skyColor").select2({
                placeholder: 'Please select...',
                allowClear: true,
                data: this.colors,
                formatSelection: (item) => { return item.text; },
                formatResult: (item) => { return item.text; }
            });
            $("#players").select2({
                multiple: true,
                placeholder: 'Please select...',
                data: this.players,
                formatSelection: (item) => { return item.text; },
                formatResult: (item) => { return item.text; },
                maximumSelectionSize: 2
            });

            $("#dateTimePicker").datetimepicker();

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
            }, 3000);

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