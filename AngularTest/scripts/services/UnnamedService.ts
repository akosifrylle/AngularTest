module MyApp.Services {

    export class UnnamedService {

        private unnamedService: restangular.IElement;

        constructor(private restangular: restangular.IElement) {
            this.unnamedService = restangular.allUrl('code360','http://www.code360.com.au/assessment/fe');
        }

        public getData() {
            return this.unnamedService.getList();
        }
    }

    angular.module('myApp')
        .service('UnnamedService', [
            'Restangular',
            UnnamedService]);
} 