var appModule = angular.module("app", [
    "ui.router",
    'ngMaterial',
    'ngMessages',
    'material.svgAssetsCache',
    'md.data.table'
]);

appModule.config([
    '$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/");

        $stateProvider.state('inicio', {
            url: '/',
            templateUrl: '../../app/comum/views/home.html'
        });

        $stateProvider.state('depoimentos', {
            url: '/depoimentos',
            templateUrl: '../../app/cadastros/views/depoimentos.html'
        });

        $stateProvider.state('localizacao', {
            url: '/localizacao',
            templateUrl: '../../app/localizacao/views/localizacao.html'
        });

        $stateProvider.state('map', {
            url: '/map',
            templateUrl: '../../app/localizacao/views/map.html'
        });
}]);

appModule.config(['$mdIconProvider', function($mdIconProvider) {
    $mdIconProvider.icon('md-close', 'img/icons/ic_close_24px.svg', 24);
}]);

