(function () {
    appModule.controller('comum.views.header',
        function ($scope, $mdSidenav, $mdDialog, $mdMedia) {
            var vm = this;

            vm.toggleSidenav = function (menu) {
                $mdSidenav(menu).toggle();
            }

            vm.menuSetup = {
                menus: [{
                    nome: 'Usuários', icon: 'message', width: '4',
                    submenus: [{ nome: 'Cadastro Usuários', link: '' }]
                }]
            }
        }
    );
})();