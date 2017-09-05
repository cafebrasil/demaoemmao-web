'use strict';

angular.module('demaoemmao',
    ['ngRoute',
        'ngResource',
        'ui.router',
        'demaoemmao.QuemSomos',
        'demaoemmao.Cultura',
        'demaoemmao.Livraria']).config(config);
function config($locationProvider, $urlRouterProvider){
    $urlRouterProvider
        .otherwise('/');
    // $locationProvider.hashPrefix('!');
    // $locationProvider.html5Mode(true);

}