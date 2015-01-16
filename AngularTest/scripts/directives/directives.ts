var app = angular.module('myApp');
app.directive('dateTimeValidator', () => {
    return {
        require: 'ngModel',
        link: (scope, elem, attrs, ctrl) => {
            ctrl.$validators.dateTimeValidator = (modelValue, viewValue) => {
                if (viewValue) {
                    modelValue = viewValue;
                    return true;
                } else {
                    return false;
                }
            };
        }
    }
}).directive('dropdownValidator', () => {
    return {
            require: 'ngModel',
            link: (scope, elem, attrs, ctrl) => {
                ctrl.$validators.dropdownValidator = (modelValue, viewValue) => {
                    if (viewValue) {
                        modelValue = viewValue;
                        return true;
                    } else {
                        return false;
                    }
                }
        }
        }
}).directive('multiselectvalidator', () => {
        return {
            require: 'ngModel',
            link: (scope, elm, attrs, ctrl) => {
                ctrl.$validators.multiselectvalidator = (modelValue, viewValue) => {
                    if (viewValue) {
                        var values = viewValue.val().split(',');
                        if (values.length == 2) {
                            modelValue = values;
                            return true;
                        } else {
                            return false;
                        }
                    } else {
                        return false;
                    }
                };
            }
        };
    });