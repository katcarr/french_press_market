frenchPressMarket.factory('FrenchPressFactory', function FrenchPressFactory() {
  var factory = {};
  factory.presses = [];
  factory.total = 0;

  factory.addPress = function() {
    var press = {volume: factory.pressSize, material: factory.pressMaterial, quantity: factory.pressQuantity};
    factory.presses.push(press);

    if (press.volume === "Pint") {
      factory.total = 10 * press.quantity; // Pint Metal
      if (press.material === "Glass") {
        factory.total = 5 * press.quantity; // Pint Glass
      }
    } else if (press.volume === "Quart") {
      factory.total = 20 * press.quantity; // Quart Metal
      if (press.material === "Glass") {
        factory.total = 10 * press.quantity; // Quart Glass
      }
    } else {
      factory.total = 30 * press.quantity; // Pitcher Metal
      if (press.material === "Glass") {
        factory.total = 20 * press.quantity; // Pitcher Glass
      }
    }

    if (press.quantity > 100) {
      factory.total *= 0.80;
    } else if (press.quanity < 101 && press.quantity > 49) {
      factory.total *= 0.90;
    } else if (press.quantity > 24) {
      factory.total *= 0.95;
    }

  };

  factory.deletePress = function(press) {
    var index = factory.presses.indexOf(press);
    factory.presses.splice(index, 1);
  };

  return factory;
});
