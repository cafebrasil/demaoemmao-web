'use strict';
angular.module('demaoemmao.Cultura',
    ['ui.router']).config(config);
function config ($stateProvider) {
    $stateProvider.state('cultura', {
        url: '/cultura',
        abstract:false,
        templateUrl: '/cultura/pages/cultura.html'
    });
}