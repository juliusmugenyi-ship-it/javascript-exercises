"use strict";

// Lesson 04 exercise: Operators and conditionals
// In your exercise repository, create a branch named `lesson-04-exercise` and switch to it,
// then open `lesson-04.js`, where the questions wait as comments. The file begins with the
// strict mode line. Work beneath each question in order.

// TODO: Part one.
// The file lists ten expressions that mix coercion, strict comparison, and logical
// combination, among them `3 === "3"`, `1 + true`, and `!(5 > 2)`. Write your predicted result
// as a comment beside each expression before running the file, then run it and correct any
// misses, leaving both the prediction and the actual result visible.

// * The provided expressions, write your prediction beside each before running:
console.log(3 === "3"); // prediction: false | Actual: false
console.log(3 == "3"); // prediction: true | Actual: true
console.log("5" - 1); // prediction: 4 | Actual: 4
console.log("5" + 1); // prediction: "51" | Actual: "51"
console.log(1 + true); // prediction: 2 | Actual: 2
console.log(10 >= 10); // prediction: true | Actual: true
console.log(!(5 > 2)); // prediction: false | Actual: false
console.log(4 !== "4"); // prediction: true | Actual: true
console.log("b" > "a"); // prediction: true | Actual: true
console.log(0 === -0); // prediction: true | Actual: true

/*=== compares both value and type, so 3 === "3" is false.
== performs type coercion, so 3 == "3" is true.
The - operator converts numeric strings to numbers, so "5" - 1 is 4.
The + operator concatenates when one operand is a string, so "5" + 1 becomes "51".
true is coerced to 1 in numeric addition, so 1 + true is 2.
0 and -0 are considered equal with ===, so 0 === -0 is true. */

// TODO: Part two.
// Write one `if` statement with an `else` branch on a variable of your choosing. Run the file
// twice with different values so that each branch has printed at least once, and record each
// run's output in a comment.

let age = 20;

if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

age = 16;

if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

// TODO: Part three.
// Build an `else if` chain for order pricing: more than 12 items produces one message, more
// than 6 another, and everything else a third. Run it with values that reach every branch, and
// add a comment explaining why the most specific question must be asked first.

let items = 15;

if (items > 12) {
  console.log("Large order: 20% discount.");
} else if (items > 6) {
  console.log("Medium order: 10% discount.");
} else {
  console.log("Regular order: No discount");
}

// TODO: Part four.
// For each of the eight provided values, which include `0`, `"0"`, an empty string, and a
// single space, predict in a comment whether it is truthy or falsy. Verify each prediction
// with `Boolean()` and correct your misses.

// * The eight provided values:
const courtValues = [false, 0, "0", "", " ", "bread", null, undefined];

// false
console.log(Boolean(courtValues[0])); // Prediction: falsy | Actual: false

// 0
console.log(Boolean(courtValues[1])); // Prediction: falsy | Actual: false

// "0"
console.log(Boolean(courtValues[2])); // Prediction: truthy | Actual: true

// ""
console.log(Boolean(courtValues[3])); // Prediction: falsy | Actual: false

// " "
console.log(Boolean(courtValues[4])); // Prediction: truthy | Actual: true

// "bread"
console.log(Boolean(courtValues[5])); // Prediction: truthy | Actual: true

// null
console.log(Boolean(courtValues[6])); // Prediction: falsy | Actual: false

// undefined
console.log(Boolean(courtValues[7])); // Prediction: falsy | Actual: false

// TODO: Part five.
// Rewrite the provided day-based `if` chain as a `switch` statement with a `default` case and
// a `break` in every case, and confirm that it prints the same answers for three test days.

// * The provided day-based if chain, rewrite it as a switch beneath it:

/*const day = "Sunday";
if (day === "Saturday") {
  console.log("Open 7:00 to 14:00");
} else if (day === "Sunday") {
  console.log("Open 8:00 to 12:00");
} else if (day === "Monday") {
  console.log("Closed today");
} else {
  console.log("Open 7:00 to 18:00");
}*/

const day = "Sunday";

switch (day) {
  case "Saturday":
    console.log("Open 7:00 to 14:00");
    break;

  case "Sunday":
    console.log("Open 8:00 to 12:00");
    break;

  case "Monday":
    console.log("Closed today");
    break;

  default:
    console.log("Open 7:00 to 18:00");
    break;
}

// TODO: Part six.
// The file ends with a short broken program that contains an assignment where a comparison was
// intended, and a `switch` with a missing `break`. Run it, observe both incorrect behaviors,
// repair both, and describe each repair in one comment line.

// * The provided broken program, run it, observe both incorrect behaviors, then repair both:

/*let shopStatus = "closed";
if ((shopStatus = "open")) {
  console.log("Welcome in");
}
const size = "M";
switch (size) {
  case "S":
    console.log("Small");
  case "M":
    console.log("Medium");
  case "L":
    console.log("Large");
    break;
  default:
    console.log("Unknown size");
}
*/

let shopStatus = "closed";

if (shopStatus === "open") {
  console.log("Welcome in");
}
// Repair: Changed = to === so the condition compares the value instead of assigning "open" to shopStatus.

const size = "M";

switch (size) {
  case "S":
    console.log("Small");
    break;

  case "M":
    console.log("Medium");
    break;

  case "L":
    console.log("Large");
    break;

  default:
    console.log("Unknown size");
}
// also break statement added for the repaired code to avoid the switch from failure late.

// TODO: Part seven.
// Two classic exercises close the lesson. First, the leap year checker: a year is a leap year
// when it is divisible by 4 and not by 100, unless it is also divisible by 400. Implement the
// rule with the remainder operator and logical operators, and test it against 2024, 1900, and
// 2000. Second, FizzBuzz for a single number: for one number variable, print Fizz when it is
// divisible by 3, Buzz when it is divisible by 5, FizzBuzz when it is divisible by both, and
// the number itself otherwise. The loops lesson scales this to one hundred.

// Leap year checker

function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isLeapYear(2024)); // Prediction: true | Actual: true
console.log(isLeapYear(1900)); // Prediction: false | Actual: false
console.log(isLeapYear(2000)); // Prediction: true | Actual: true

// Repair/logic note: A leap year must be divisible by 4, not by 100, unless it is also divisible by 400.

// FizzBuzz for one number

let number = 15;

if (number % 3 === 0 && number % 5 === 0) {
  console.log("FizzBuzz");
} else if (number % 3 === 0) {
  console.log("Fizz");
} else if (number % 5 === 0) {
  console.log("Buzz");
} else {
  console.log(number);
}

// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
