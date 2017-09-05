'use strict';
angular.module('demaoemmao.Leitor',
    ['ui.router']).config(config);

function config ($stateProvider) {
    $stateProvider.state('atualizar', {
        url: '/leitor',
        abstract:false,
        templateUrl: '/leitor/pages/leitor.editar.html',
        controller: 'leitorController as vm',
        params: {livro: null}
    }).state('novo', {
        url: '/novo',
        abstract:false,
        templateUrl: '/leitor/pages/leitor.novo.html',
        controller: 'leitorController as vm',
        params: {livro: null}
    });
}