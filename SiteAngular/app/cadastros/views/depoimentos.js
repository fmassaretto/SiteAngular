(function () {
    appModule.controller('cadastros.views.depoimentos',
        function ($scope, $mdSidenav, $mdDialog, $mdMedia, $http, $rootScope) {
            var vm = this;

            vm.depoimentos = [];

   
            vm.abrirModal = function (ev, id) {
                var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
                $mdDialog.show({
                    templateUrl: 'cadastro.html',
                    controller: 'cadastros.views.modalDepoimento as vm',
                    parent: angular.element(document.body),
                    targetEvent: ev,
                    fullscreen: useFullScreen,
                    locals: {
                        depoimentoId: id
                    }
                }).then(function () {
                    
                });
            };
        }
    );
})();