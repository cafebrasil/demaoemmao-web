'use strict';
angular.module('demaoemmao.Livraria').factory('livrariaFactory', livrariaFactory);
livrariaFactory.$inject = ['$resource'];
function livrariaFactory($resource) {
    var url = "http://localhost:8080/confrariacafebrasil/api/v1/demaoemmao/";


    var restTags = $resource(
        url.concat('tag/:action/:param'), {
    }, {
        tags: {
            method: 'GET', params: {
            action: 'listar'
        }, isArray: true}
    });

    var rest = $resource(url.concat('livros/:action/:param'), {

    }, {
        pesquisar: {method: 'POST', params: {action: 'pesquisar'}, isArray: true},
        tags: {method: 'GET', params: {action: 'tags'}, isArray: true},
        salvar: {method: 'POST', params: {action: 'salvar'}, isArray: true}
    });

    var service = {
        pesquisar:function (descricao) {
            return rest.pesquisar(descricao).$promise;
        },

        recuperarTags:function (codigoLivro) {
            return restTags.tags({param:codigoLivro}).$promise;
        },
        salvar:function(livro){
            return rest.salvar(livro).$promise;
        }
    };
    return service;
}
