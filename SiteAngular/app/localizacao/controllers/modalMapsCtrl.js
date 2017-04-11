(function () {
    appModule.controller('localizacao.controllers.modalMapsCtrl',
        function ($scope, $mdSidenav, $mdDialog, $mdMedia) {
            var vm = this;

            vm.fecharModal = function () {
                $mdDialog.cancel();
            };
        }
    );
})();