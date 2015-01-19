var MyApp;
(function (MyApp) {
    (function (Models) {
        var FormData = (function () {
            function FormData() {
                this.fullName = '';
                this.dozen = 1;
                this.skyColor = '';
                this.selectedDateTime = '';
                this.players = [];
                this.favoriteSaying = '';
            }
            return FormData;
        })();
        Models.FormData = FormData;
    })(MyApp.Models || (MyApp.Models = {}));
    var Models = MyApp.Models;
})(MyApp || (MyApp = {}));
//# sourceMappingURL=FormData.js.map
