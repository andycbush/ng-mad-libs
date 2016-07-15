angular.module('myRefactor', [])
    .constant('VERSION', 1.1)
    .controller('MyCtrl', function (VERSION, $scope) {
        $scope.version = VERSION;
    });
