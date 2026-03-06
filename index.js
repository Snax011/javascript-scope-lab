// Write your solution in this file!

// Global scope: burgers array with const
const burgers = ['Hamburger', 'Cheeseburger'];

// Global scope: featuredDrink with let
let featuredDrink = 'Strawberry Milkshake';

// Function that adds a new burger (function-scoped variable)
function addBurger() {
  const newBurger = 'Flatburger';
  burgers.push(newBurger);
}

// If statement with block-scoped variable
if(true) {
  const anotherNewBurger = 'Maple Bacon Burger';
  burgers.push(anotherNewBurger);
}

// Function that changes the featuredDrink
function changeFeaturedDrink() {
  featuredDrink = 'The JavaShake';
}