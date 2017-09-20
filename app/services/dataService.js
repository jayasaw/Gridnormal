(function () {
    'use strict';
    console.log('data service');

    angular.module('app')
        .service('dataService', function ($q) {

            /* declare service functions here */
            this.getGridData = getGridData;
            //this.deleteGrideData = deleteGrideData;


            /* write private variable here */
            var gridData = [
                { id: 1, name: 'anup', city: 'pune' },
                { id: 2, name: 'anvi', city: 'ranchi' },
                { id: 3, name: 'ishaan', city: 'ranchi' },
                { id: 4, name: 'jaya', city: 'jsr' }
            ];

            /* start writing function from here */
            function getGridData() {
                return $q.when(gridData);
            }
        
        //   function deleteGrideData(index){
        //       //  gridData.splice(index,1)
        //         return $q.when(gridData)
        //     }

          


        })

})();



