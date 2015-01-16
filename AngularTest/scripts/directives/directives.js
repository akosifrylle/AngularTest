var app = angular.module('myApp');
app.directive('dateTimeValidator', function () {
    return {
        require: 'ngModel',
        link: function (scope, elem, attrs, ctrl) {
            ctrl.$validators.dateTimeValidator = function (modelValue, viewValue) {
                if (viewValue) {
                    modelValue = viewValue;
                    return true;
                } else {
                    return false;
                }
            };
        }
    };
}).directive('dropdownValidator', function () {
    return {
        require: 'ngModel',
        link: function (scope, elem, attrs, ctrl) {
            ctrl.$validators.dropdownValidator = function (modelValue, viewValue) {
                if (viewValue) {
                    modelValue = viewValue;
                    return true;
                } else {
                    return false;
                }
            };
        }
    };
}).directive('multiselectvalidator', function () {
    return {
        require: 'ngModel',
        link: function (scope, elm, attrs, ctrl) {
            ctrl.$validators.multiselectvalidator = function (modelValue, viewValue) {
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
//# sourceMappingURL=directives.js.map
