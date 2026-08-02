"use strict";

// Lesson 06 exercise: Arrays and loops
// In your exercise repository, create a branch named `lesson-06-exercise` and switch to it,
// then open `lesson-06.js`. The questions wait as comments, and the file begins with the
// strict mode line. Work beneath each question in order.

// TODO: Part one.
// Build an array of at least five menu item names. Log the whole array, the first item, the
// last item read through `length` minus 1, and the array's length.

const menuItems = ["Sourdough", "Cakes", "Croissant", "Pretzel", "Tacos"];

console.log(menuItems);
console.log(menuItems[0]);
console.log(menuItems[menuItems.length - 1]);
console.log(menuItems.length);

// TODO: Part two.
// Grow and shrink the menu with one `push`, one `unshift`, one `pop`, and one `shift`, logging
// the array after each step, and note in a comment which end of the array each method touched.

// push() adds an item to the end of the array.
menuItems.push("Sourdough");
console.log(menuItems);

// unshift() adds an item to the beginning of the array.
menuItems.unshift("Cakes");
console.log(menuItems);

// pop() removes an item from the end of the array.
menuItems.pop();
console.log(menuItems);

// shift() removes an item from the beginning of the array.
menuItems.shift();
console.log(menuItems);

// TODO: Part three.
// Print every menu item twice, first with a counting `for` loop that uses the index, then with
// a `for...of` loop, and add a one-line comment on when you would choose each form.

// Use a counting for loop when you need the index or want precise control over iteration.
for (let i = 0; i < menuItems.length; i++) {
  console.log(menuItems[i]);
}

// Use a for...of loop when you only need each value in the array.
for (const item of menuItems) {
  console.log(item);
}

// TODO: Part four.
// Using the provided prices array, build display strings with `map`, keep the items under five
// euros with `filter`, and fetch the first item over ten euros with `find`, logging each
// result. Add a comment stating what `forEach` would have returned in their place, and why
// that is the well-known trap.

// * The provided prices:
const prices = [4.5, 12, 3.2, 8];
// Build display strings with map().
const displayPrices = prices.map((price) => `€${price.toFixed(2)}`);
console.log(displayPrices);

// Keep only items under five euros with filter().
const underFive = prices.filter((price) => price < 5);
console.log(underFive);

// Find the first item over ten euros with find().
const firstOverTen = prices.find((price) => price > 10);
console.log(firstOverTen);

// forEach() would return undefined because it is designed for side effects
// (like logging or updating something), not for producing a new array or value.
// That's the common trap: expecting it to behave like map(), filter(), or find().

// TODO: Part five.
// Loop over the provided artists array and log a two-line card for each artist using template
// literals. Then add one artist of your own invention to the data and run the file again,
// noting in a comment what you did not have to change.

// * The provided artists:
const artists = [
  "Pinkfong",
  "Adriano Celentano",
  "Asake",
  "Miyagi and Andy Panda",
  "Johnny Cash",
];

// Add one more artist.
artists.push("The Midnight");

// Log a two-line card for each artist using a template literal.
for (const artist of artists) {
  console.log(`Artist: ${artist}
Enjoy their music!`);
}

// I only added a new artist to the array.
// I did not have to change the loop because it automatically processes every item in the array.

// TODO: Part six.
// Assign the menu to a second variable, push a new item through the second name, and log both
// variables to demonstrate the shared reference. Then create a spread copy, change the copy,
// and log both lengths to prove the original survived.

// Assign the menu array to a second variable (shared reference).
const sharedMenu = menuItems;

sharedMenu.push("Sourdough");

console.log(menuItems);
console.log(sharedMenu);

// Create a shallow copy with the spread operator.
const copiedMenu = [...menuItems];

copiedMenu.push("Coffee");

console.log(menuItems.length);
console.log(copiedMenu.length);

// sharedMenu and menuItems refer to the same array, so changes through either
// variable affect both. copiedMenu is a new array, so changes to it do not
// affect the original.

// TODO: Part seven.
// The counting classics. Implement FizzBuzz in full: loop from 1 to 100, printing Fizz for
// multiples of 3, Buzz for multiples of 5, FizzBuzz for both, and the number itself otherwise,
// reusing your single-number logic from the conditionals exercise. Then, with loops over the
// provided numbers array, compute the sum and find the largest value without library helpers.

// FizzBuzz
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

// * The provided numbers for the sum and the largest:
const numbers = [12, 5, 41, 8, 33, 2, 27];

// Compute the sum.
let sum = 0;

for (const number of numbers) {
  sum += number;
}

console.log(sum);

// Find the largest value.
let largest = numbers[0];

for (const number of numbers) {
  if (number > largest) {
    largest = number;
  }
}

console.log(largest);

// TODO: Part eight.
// The string classics that waited for loops. Reverse a string with a loop that walks it
// backwards by index. Count its vowels with a loop and `includes` against a vowels array. As a
// stretch, use your reverser to build a palindrome check, and test it on three words, ignoring
// case with `toLowerCase`.

// Reverse a string by walking backwards through it.
const text = "JavaScript";

let reversed = "";

for (let i = text.length - 1; i >= 0; i--) {
  reversed += text[i];
}

console.log(reversed);

// Count vowels using a loop and includes().
const vowels = ["a", "e", "i", "o", "u"];
let vowelCount = 0;

for (const character of text.toLowerCase()) {
  if (vowels.includes(character)) {
    vowelCount++;
  }
}

console.log(vowelCount);

// Stretch: palindrome checker using the reverser.
function reverseString(str) {
  let result = "";

  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }

  return result;
}

function isPalindrome(word) {
  const lower = word.toLowerCase();
  return lower === reverseString(lower);
}

// Test on three words.
console.log("Level:", isPalindrome("Level"));
console.log("Racecar:", isPalindrome("Racecar"));
console.log("Apple:", isPalindrome("Apple"));

// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
