'use strict';

angular.module('demaoemmao.QuemSomos', ['ui.router'])
    .config(config);
function config ($stateProvider) {
    $stateProvider.state('quemsomos', {
        url: '/quemsomos',
        abstract:false,
        templateUrl: '/quemsomos/pages/quemsomos.html'
    });
}
