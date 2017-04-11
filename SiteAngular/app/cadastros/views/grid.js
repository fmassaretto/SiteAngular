(function () {
    appModule.controller('cadastros.views.grid',
        function ($scope, $mdSidenav, $mdDialog, $mdMedia, $http, $rootScope) {
            var vm = this;

            $http({
                method: 'GET',
                url: 'https://api.meetup.com/2/cities',
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Headers': 'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method, Authorization',
                    
                    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE',
                    'Accept': 'application/json'
                }
            }).then(function successCallback(response) {

                vm.results = response.results;
                // this callback will be called asynchronously
                // when the response is available
            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });

        }
    );
})();