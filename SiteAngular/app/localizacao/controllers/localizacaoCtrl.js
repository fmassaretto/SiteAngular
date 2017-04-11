(function () {
    appModule.controller('localizacao.controllers.localizacaoCtrl',
        function ($scope, $mdSidenav, $mdDialog, $mdMedia, $http) {
            var vm = this;

            vm.selected = [];
            vm.citySelecionada = "";
            var urlMap1 = "https://maps.googleapis.com/maps/api/staticmap?center=";
            var urlMap2 = ",Sao+Paulo,SP&zoom=13&size=500x300&maptype=roadmap%20&markers=color:blue";


            vm.abrirModal = function (ev, lat, lon) {
                console.log("1" + lat + " - " + lon);
                vm.citySelecionada = urlMap1.toString() + parseFloat(lat).toString() + "," + parseFloat(lon).toString() + urlMap2.toString();
                console.log("3" + vm.citySelecionada);
                var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
                $mdDialog.show({
                    templateUrl: 'map.html',
                    controller: 'localizacao.controllers.modalMapsCtrl as vm',
                    parent: angular.element(document.body),
                    targetEvent: ev,
                    fullscreen: useFullScreen,
                    locals: {
                        
                    }
                }).then(function () {
                    console.log("2"+city);
                    vm.citySelecionada = "https://maps.googleapis.com/maps/api/staticmap?center="+city+",Sao+Paulo,SP&zoom=13&size=500x300&maptype=roadmap%20&markers=color:blue";
                });
            };

            vm.ordenarPor = function (campo) {
                vm.criterioOrdenacao = campo;
                vm.direcaoOrdenacao = !vm.direcaoOrdenacao;
            };

            vm.pagination = function (page, limit) {
                console.log('page: ', page);
                console.log('limit: ', limit);
            }

            vm.query = {
                order: vm.resu,
                limit: 5,
                page: 1
            };

            
            $http({
                method: 'GET',
                url: 'https://api.meetup.com/2/cities',
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Headers': 'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method, Authorization',                   
                    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE',
                    'Content-Type': 'application/jsonp',
                    'Accept': 'application/jsonp'
                }
            }).then(function successCallback(response) {

                vm.count = response.data.results.length;
                vm
                console.log(vm.count);
                vm.results = response.data.results;

                //var city = [];
                //for (var i = 0; i < vm.results.length; i++) {
                //    city.push(vm.results[i]['city']);
                //}
                vm.query = {
                    order: vm.results.city,
                    limit: 5,
                    page: 1
                };
                
            }, function errorCallback(response) {
                console.log("Erro: " + response.error);
            });
        }
    );
})();