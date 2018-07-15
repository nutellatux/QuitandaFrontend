(function () {
    'use strict';

    angular
        .module('quitandaApp')
        .service('estoque_service', estoque_service);

    estoque_service.$inject = ['$http'];
    function estoque_service($http) {

        this.dados_tabela = function() {
            return $http({
                headers: {
                    "Content-Type": "application/json; charset=utf-8"
                },
                url: '/totalEstq',
                responseType: 'json',
                method: "GET",
                params: {
                    format: 'jsonp',
                    callback: 'JSON_CALLBACK'
                }
            }).then(function (response) {
                return response.data;
            });   
        }

    }
})();