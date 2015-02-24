frenchPressMarket.controller("FrenchPressesCtrl", function FrenchPressesCtrl($scope, FrenchPressFactory){

  $scope.presses = FrenchPressFactory.presses;
  $scope.FrenchPressFactory = FrenchPressFactory;

});
