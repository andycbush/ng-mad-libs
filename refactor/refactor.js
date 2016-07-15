angular.module('myRefactor', [])
    .controller('MyCtrl', function () {
        this.version = 1.2;
    })
    .controller('MyCtrlTitle', function () {
        this.title = 'Mad Libs Refactor 2 Challenge, Controller with Controller As';
    });
