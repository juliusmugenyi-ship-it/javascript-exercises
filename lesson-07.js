"use strict";

// Lesson 07 exercise: Objects
// In your exercise repository, create a branch named `lesson-07-exercise` and switch to it,
// then open `lesson-07.js`. The questions wait as comments, and the file begins with the
// strict mode line. Work beneath each question in order.

// TODO: Part one.
// Model a single menu item as an object with at least four properties of mixed types,
// including one boolean. Log two properties with dot notation, then log one property through
// bracket notation with the key held in a variable, and note in a comment why the brackets
// were required in that case.

const menuItem = {
  name: "Croissants",
  price: 12.5,
  category: "Main Course",
  available: true,
};

console.log(menuItem.name);
console.log(menuItem.price);

const propertyKey = "available";
console.log(menuItem[propertyKey]);

// Bracket notation was required because the property key was stored in a variable,
// so dot notation cannot be used with a dynamic key.

// TODO: Part two.
// Give the item a `describe` method that returns one sentence built from the object's own
// properties through `this`, and log the result of calling it.

const detailedmenuItem = {
  name: "Bagel",
  price: 12.5,
  category: "Main Course",
  available: true,

  describe() {
    return `${this.name} is a ${this.category} item that costs €${this.price.toFixed(2)} and is currently ${this.available ? "available" : "unavailable"}.`;
  },
};

console.log(detailedmenuItem.describe());

// TODO: Part three.
// Build an array of at least five menu item objects, and walk it with `for...of`, logging one
// formatted line per item.

const menuItems = [
  {
    name: "Cakes",
    price: 12.5,
    category: "Main Course",
    available: true,
  },
  {
    name: "Pretzel",
    price: 6,
    category: "Starter",
    available: true,
  },
  {
    name: "sourdough",
    price: 5.5,
    category: "Starter",
    available: false,
  },
  {
    name: "Omelet",
    price: 10,
    category: "Main Course",
    available: true,
  },
  {
    name: "Ice Cream",
    price: 4,
    category: "Dessert",
    available: true,
  },
];

for (const item of menuItems) {
  console.log(
    `${item.name} - €${item.price.toFixed(2)} (${item.category}) - ${item.available ? "Available" : "Unavailable"}`,
  );
}

// TODO: Part four.
// Put the callback methods to work on the data: log the names of all vegetarian items by
// combining `filter` and `map`, and fetch the first item cheaper than three euros with `find`.
// Add a comment stating what `find` returns when nothing matches.

const vegetarianNames = menuItems
  .filter((item) => item.vegetarian)
  .map((item) => item.name);

console.log(vegetarianNames);

const cheapItem = menuItems.find((item) => item.price < 3);

console.log(cheapItem);

// If find() does not find a matching item, it returns undefined.

// TODO: Part five.
// Take one menu item and log its keys, its values, and finally every pair through a `for...of`
// loop over its entries with a destructured pair, formatted as the key, a colon in the output
// text, and the value.

const item = menuItems[0];

console.log(Object.keys(item));
console.log(Object.values(item));

for (const [key, value] of Object.entries(item)) {
  console.log(`${key}: ${value}`);
}

// TODO: Part six.
// Assign one item to a second variable, change the price through the second name, and log the
// first to demonstrate the shared reference. Then build a spread copy that overrides only the
// price, and log both objects to prove they now differ in exactly that property.

const firstItem = menuItems[0];

// Assign the same object reference to a second variable.
const secondItem = firstItem;

secondItem.price = 15;

console.log(firstItem);

// Create a spread copy and override only the price.
const copiedItem = {
  ...firstItem,
  price: 20,
};

console.log(firstItem);
console.log(copiedItem);

// The two variables shared the same object at first, so changing secondItem
// changed firstItem too. The spread copy created a new object, so only the
// price property differs between the original and the copy.

// TODO: Part seven.
// As a stretch, build the classic word frequency counter: split the provided sentence into
// words and walk them with a loop, using each word as a bracket-notation key on a counter
// object and adding one per sighting. Log the finished counter, and if the sort extension
// caught your interest, log its entries ordered so that the most frequent word comes first.

// * The provided sentence for the word frequency counter:
const sentence =
  "the quick brown fox jumps over the lazy dog the fox sleeps and the dog dreams";

const words = sentence.split(" ");
const counter = {};

for (const word of words) {
  if (counter[word]) {
    counter[word]++;
  } else {
    counter[word] = 1;
  }
}

console.log(counter);

// Stretch: sort entries by frequency, with the most frequent word first.
const sortedEntries = Object.entries(counter).sort((a, b) => b[1] - a[1]);

console.log(sortedEntries);

// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
