'use strict';
angular.module('demaoemmao.Livraria')
    .controller('livrariaController', livrariaController);
livrariaController.$inject =
    ['$state', '$stateParams', '$scope',
    '$routeParams', '$location',
    // '$window',
    '$http', 'livrariaFactory'];

function livrariaController($state, $stateParams, $scope, $routeParams, $location,
    // $window,
    $http, livrariaFactory) {

    var vm = this;
    vm.book = {};
    vm.autores = [];
    vm.tags = [];
    vm.findTags = ["Biografia", "Literatura", "Administração - Desenvolvimento Profissional"];

    vm.tag = undefined;
    vm.autor = undefined;
    vm.error= null;
    vm.sucess= null;

    init();
    function init(){
        if($stateParams.livro != null){
            vm.book = $stateParams.livro;
            livrariaFactory.recuperarTags(vm.book.codigo)
                .then(function (data) {
                    vm.tags = angular.copy(data);
                    console.log(vm.tags);
                },function (e) {
                    vm.error = [];
                    vm.error.mensagem = 'Falha na comunicação com o servidor de api.';
            });
        }

    };

    vm.edit = function(b){
        vm.book = angular.copy(b);
        $state.go('atualizar',{livro:b});
    };

    vm.emprestar = function(b){
        vm.book = angular.copy(b);
        $state.go('emprestar',{livro:b});
    };

    vm.removeTag = function (tag) {
        if(vm.tags != null && vm.tags.length > 0){
            for(var i=0; i < vm.tags.length;i++){
                if(vm.tags[i].id === tag.id){
                    vm.tags.splice(i,1);
                    break;
                }
            }
        }
    };
    vm.addTag = function (t) {
        var tag = angular.copy(t);
        vm.tags.push({codigo:null, ativo:1, tag :{codigo: null, descricao: tag}});
    };

    /*
    vm.addAutor = function (a) {
        vm.autor = angular.copy(a);
        if((vm.autor !== undefined && vm.autor.trim().length !== 0)){
            var isExiste  = false;
            for(var i=0; i < vm.autores.length;i++){
                if(vm.autor[i].nome === vm.autor){
                    isExiste = true;
                    break;
                }
            }
            if(!isExiste){
                vm.autores.push({id:vm.autores.length,nome:vm.autor,codigo:null});
            }
        }
    };
    vm.removeAutor = function (autor) {
        if(vm.autores != null && vm.autores.length > 0){
            for(var i=0; i < vm.autores.length;i++){
                if(vm.autor[i].id === autor.id){
                    vm.autores.splice(i,1);
                    break;
                }
            }
        }
    }; */

    vm.salvar = function(){
        if(vm.book != null && vm.book.codigo != null){
            vm.book.livroTags = [];
            for( var i = 0; i < vm.tags.length; i++){
                vm.tags[i].livro = {codigo: vm.book.codigo};
            }
            if(vm.tags.length == 0){
                vm.book.livroTags = null;
            }else {
                vm.book.livroTags = vm.tags;
            }

            livrariaFactory.salvar(angular.toJson(vm.book))
                .then(function (data) {
                    vm.sucess.mensagem = "Livro atualizado com sucesso."
                }, function (e) {
                    vm.error = [];
                    vm.error.mensagem = 'Falha na atualização do livro.';
                    console.error(e);
            });
        }
    };
    vm.pesquisar = function(descricao){
        var promise = livrariaFactory.pesquisar(descricao);
        promise.then(function (data) {
                vm.books = data;
            }, function (e) {
                vm.error = [];
                vm.error.mensagem = 'Falha na comunicação com o servidor de api.';
                console.error(e);
        });
    }

}