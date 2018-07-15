'use strict';

/**
 * @ngdoc function
 * @name quitandaApp.controller:AboutCtrl
 * @description
 * Controller da pagina de produtos
 */
angular.module('quitandaApp')
  .controller('produtos_controller', function ($scope, estoque_service) {

    $scope.carregando = true;
    estoque_service.produtos_grafico()
      .then(function (data) {
        $scope.carregando = false;
        $scope.lista_dados_tabela = data;
      }, function (reason) {
        $scope.carregando = false;
        console.log(reason);
      })

  });
