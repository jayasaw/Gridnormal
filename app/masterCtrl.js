(function () {
    'use strict';

    angular.module('app').controller('masterCtrl', function () {
        var vm = this;

        vm.submit = function () {
            console.log('this is master controller');
        }
    });

})();


