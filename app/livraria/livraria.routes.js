'use strict';
angular.module('demaoemmao.Livraria',
    ['ui.router']).config(config);

function config ($stateProvider) {
    $stateProvider.state('listar', {
        url: '/listar',
        abstract:false,
        templateUrl: '/livraria/pages/livros.html',
        controller: 'livrariaController as vm'
    }).state('atualizar', {
        // url: '/livros/:book/edit',
        url: '/livros',
        abstract:false,
        templateUrl: '/livraria/pages/livros.editar.html',
        controller: 'livrariaController as vm',
        params: {livro: null}
    }).state('novo', {
        // url: '/livros/:book/edit',
        url: '/novo',
        abstract:false,
        templateUrl: '/livraria/pages/livros.novo.html',
        controller: 'livrariaController as vm',
        params: {livro: null}
    }).state('emprestar', {
        url: '/emprestar',
        abstract:false,
        templateUrl: '/livraria/pages/livros.emprestimo.html',
        controller: 'livrariaController as vm',
        params: {livro: null}
    });
}