frenchPressMarket.factory('FrenchPressFactory', function FrenchPressFactory() {
  var factory = {};
  factory.presses = [];

  factory.addPress = function() {
    var press = {};

    factory.presses.push(press);
  };

  factory.deletePress = function(press) {
    var index = factory.presses.indexOf(press);
    factory.presses.splice(index, 1);
  };

  return factory;
});
