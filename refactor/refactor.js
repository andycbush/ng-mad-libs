var app = angular.module('myRefactor', ['ngMessages'])

app.constant('VERSION', "1.3")
app.run(function (VERSION, $rootScope) {
    $rootScope.version = VERSION;
})

.controller("MyCtrl", function ($scope) {
    $scope.data = {};

    $scope.gender = {};

    $scope.inputHide = false;

    $scope.submit = function () {
        $scope.inputHide = true;
    }
    $scope.reset = function () {
        $scope.inputHide = false;
        $scope.data = {};
        location.reload();
    }
});


/*angular.module('myRefactor', [])
    .controller('MyCtrl', function () {
        this.version = 1.2;
    })
    .controller('MyCtrlTitle', function () {
        this.title = 'Mad Libs Refactor 2 Challenge, Controller with Controller As';
    });
*/
