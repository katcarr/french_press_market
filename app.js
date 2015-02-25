var frenchPressMarket = angular.module("frenchPressMarket", ['ui.bootstrap']);

frenchPressMarket.controller('ButtonsCtrl', function ($scope) {
  $scope.singleModel = 1;

  $scope.radioModel = 'Middle';

  $scope.checkModel = {
    left: false,
    middle: true,
    right: false
  };
});
