"use strict";

// Lesson 02 exercise: Variables and data types
// In your exercise repository, create a branch named `lesson-02-exercise` and switch to it,
// then open `lesson-02.js`. The questions are inside as comments, and the file begins with the
// strict mode line. Work through the parts in order, beneath each question.

// TODO: Part one.
// Declare five variables that describe a small shop of your choosing, mixing `const` and `let`
// deliberately and naming everything in camelCase. Log each variable, and add a one-line
// comment justifying every choice between `const` and `let`.

const shopName = "Maison Sarah";
// const is used because the shop name will not change after it is assigned.

let numberOfCustomers = 50;
// let is used because the number of customers can increase or decrease during the day.

const productName = "Coffee Beans";
// const is used because the product name stays the same.

let stockQuantity = 100;
// let is used because stock quantity changes when products are sold or restocked.

const openingHours = "8:00 AM - 6:00 PM";
// const is used because the opening hours are fixed and do not need reassignment.

console.log(shopName);
console.log(numberOfCustomers);
console.log(productName);
console.log(stockQuantity);
console.log(openingHours);

// TODO: Part two.
// Log the `typeof` result for each of your five variables, and additionally for `null` and for
// `undefined`. Note in a comment which one of these results is a famous historical bug of the
// language.

console.log(typeof shopName); //string
console.log(typeof numberOfCustomers); // number
console.log(typeof productName); //string
console.log(typeof stockQuantity); //number
console.log(typeof openingHours); //string

console.log(typeof null); // object
console.log(typeof undefined); // undefined

// TODO: Part three.
// Declare one variable without assigning it a value, and a second variable set to `null` on
// purpose. Log both values and both `typeof` results, and state the difference between the two
// kinds of nothing in one comment sentence.

let emptyValue;

let intentionalNull = null;

console.log(emptyValue);
console.log(intentionalNull);

console.log(typeof emptyValue);
console.log(typeof intentionalNull);

// TODO: Part four.
// Convert the three provided string values to their intended types using `Number()` and
// `Boolean()`, and convert one number of your own to a string with `String()`. Log each result
// together with its `typeof`, and note in a comment which conversion would produce `NaN` if
// the string were not a clean number.

// * The three provided string values:
const priceText = "4.50";
const countText = "12";
const flagText = "true";

// Converting the provided string values to their intended types.
const priceNumber = Number(priceText);
const countNumber = Number(countText);
const flagBoolean = Boolean(flagText);

// Converting the number of your own to a string.
const shopNumber = 50;
const shopNumberText = String(shopNumber);

console.log(priceNumber, typeof priceNumber);
console.log(countNumber, typeof countNumber);
console.log(flagBoolean, typeof flagBoolean);
console.log(shopNumberText, typeof shopNumberText);

// TODO: Part five.
// The file ends with a short broken program that contains a reassigned `const`, an assignment
// to a variable that was never declared, and a variable read before its declaration line. Run
// it, read each error message carefully, repair all three problems, and describe each repair
// in one comment line.

// ! This broken program crashes on purpose, one error at a time.
// ! Keep it commented until you reach this part, then uncomment and repair:
let bakeryName = "Maison Sarah";
bakeryName = "The Corner Bakery";
let openingHour = 7;
let loafCount = 12;
console.log(loafCount);

// TODO: Part six.
// Two variables, `a` and `b`, hold different values. Swap their contents using a third,
// temporary variable, and log both afterwards to prove the swap succeeded. This is the oldest
// exercise in programming, and it still earns its place.

let a = "tea";
let b = "coffee";

// Using a temporary variable to store the value of a while swapping.
let temp = a;
a = b;
b = temp;

console.log(a);
console.log(b);

// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
