(function () {
    appModule.controller('cadastros.views.modalDepoimento',
        function ($scope, $mdSidenav, $mdDialog, $mdMedia, $http, depoimentoId) {
            var vm = this;

            vm.depoimento = [];
            vm.descricao = "";
            vm.nomeCliente = "";

            vm.fecharModal = function () {
                vm.descricao = "";
                vm.nomeCliente = "";
                $mdDialog.cancel();
            };
        }
    );
})();