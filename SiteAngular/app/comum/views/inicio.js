(function () {
    appModule.controller('comum.views.inicio', 
        function ($scope, $state, $mdMedia, $mdDialog, $location, $rootScope, $mdSidenav) {
            var vm = this;

            vm.openMenu = function ($mdOpenMenu, ev) {
                $mdOpenMenu(ev);
            };

            vm.menuPrincipal = [{ nome: 'Depoimentos', icon: 'settings', url: 'depoimentos' }, { nome: 'Usuários', icon: 'settings', url: 'usuarios' }, { nome: 'Localização', icon: 'settings', url: 'localizacao' }];
            vm.selectedMode = 'md-fab md-fab-bottom-right md-fling';
            vm.seila = false;

            vm.abrir = function (url) {
                $state.go(url);
            };

            //Configuração para o loading...
            vm.delay = 0;
            vm.minDuration = 0;
            vm.message = 'Aguarde...';
            vm.backdrop = true;
            vm.loading = null;
            vm.resultado = null;

            vm.abrirModal = function (ev) {
                var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;

                if ($location.path() === "/depoimentos") {
                    $mdDialog.show({
                        templateUrl: 'cadastro.html',
                        controller: 'cadastros.views.modalDepoimento as vm',
                        parent: angular.element(document.body),
                        targetEvent: ev,
                        fullscreen: useFullScreen,
                        locals: {
                            depoimentoId: 0
                        }
                    }).then(function () {
                        $rootScope.$emit("CallParentMethod", {});
                    });
                }
            };

        }
    );
})();