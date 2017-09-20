(function () {
    'use strict';

    angular.module('app').controller('gridCtrl', function (dataService) {

        /******* private variables *******/
        // this will be accsible only in this controller

        var vm = this;

        /******* controller varibles *******/
        // this can be accessed by view and this controller

        vm.gridData = [];

        /******* controller funtions *******/
        // this can be accessed by view and this controller

        vm.submit = submit;
        vm.deleteData = deleteData;


        /******** data service calls ************/

        dataService
            .getGridData()
            .then(setGridData)
            .catch(error);

        /******* functions *******/

        function submit() {
            console.log('this is grid controller');
        }

        function setGridData(data) {
            vm.gridData = data;
        }

        function error(err) {
            console.error(err);
        }

         function deleteData(id){
            // dataService.deleteGrideData(id).then(function(response){
                  for(var i= 0; i<vm.gridData.length; i++){
                    if(vm.gridData[i].id === id){
                        vm.gridData.splice(i,1);
                    }
                }
        //   })

             }
        
          
    });


})();


