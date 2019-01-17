var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

var repeat = 0
while (repeat < ingredients.length) {
  console.log(ingredients[repeat]);
  repeat++;
}

for (var repeat = 0; repeat < ingredients.length; repeat++) {
  console.log(ingredients[repeat]);
}

for (var i = ingredients.length - 1; i >= 0; i--) {
  console.log(ingredients[i]);
}