/*Create two arrays:
●
●
The drinks array stores three drink orders (e.g., “Latte”, “Tea”, “Espresso”).
The pastry array stores three pastry orders (e.g., “Croissant”, “Muﬃn”,
“Bagel”).
Task 2: Log the number of drinks and number of pastries by using .length on each
row.
Task 3: Access Orders Using Bracket Notation
Use bracket notation to log a specific drink and a specific pastry using
hardcoded numbers. For example, you might want to log the first drink and last
pastry. Do this for three combinations.
Task 4: Access Orders Dynamically with Variables
Task 5: Write a loop that logs all the items in the drink category, ensuring the loop
dynamically adjusts to the number of items using .length.
Task 6: Add a New Order & Track Length
1
Suppose a new order has been placed: a customer ordered a flat white. Add “flat
white” to the drinks category dynamically. Log the updated number of drinks after
the addition.
Declare two variables and use them with bracket notation to log the selected order
dynamically.*/

// Task 1: Create two arrays
let drinks = ["Latte", "Tea", "Espresso"];
let pastries = ["Croissant", "Muffin", "Bagel"];

// Task 2: Log the number of drinks and pastries
console.log("Number of drinks:", drinks.length);
console.log("Number of pastries:", pastries.length);

// Task 3: Access Orders Using Bracket Notation
console.log("First drink:", drinks[0]);
console.log("Last pastry:", pastries[pastries.length - 1]);
console.log("Second drink:", drinks[1]);

// Task 4: Access Orders Dynamically with Variables
let drinkIndex = 2;
let pastryIndex = 1;
console.log("Selected drink:", drinks[drinkIndex]);
console.log("Selected pastry:", pastries[pastryIndex]);

// Task 5: Loop through all drinks
for (let i = 0; i < drinks.length; i++) {
  console.log("Drink:", drinks[i]);
}

// Task 6: Add a New Order and Track Length
drinks.push("Flat White");
console.log("Updated number of drinks:", drinks.length);