"use strict";

// Lesson 03 exercise: Strings and numbers
// In your exercise repository, create a branch named `lesson-03-exercise` and switch to it,
// then open `lesson-03.js`, where the questions wait as comments. Work beneath each question
// in order.

// TODO: Part one.
// Declare variables for a shop name, an opening hour, and a closing hour, then log one
// welcoming sentence built as a single template literal that uses all three.
const shopName = "Maison Sarah";
const openingHour = "8:30 AM";
const closingHour = "6:30 PM";

console.log(
  `Welcome to ${shopName}! We're open from ${openingHour} to ${closingHour}.`,
);

// TODO: Part two.
// The file provides a messy string with surplus spaces at both ends, the wrong case, and one
// word that needs replacing. Apply the methods from this lesson, chained or in sequence, to
// log the cleaned version, and add a comment naming each method you used and the job it
// performed.

// * The provided messy string:
const messy = "   Maison   Sarah, fresh bread daily   ";

// * The provided messy string:
const messy = "   Maison   Sarah, fresh bread daily   ";

// Methods used:
// - trim(): removes extra spaces from the beginning and end.
// - replace(): changes "Sarah" to the correct word/name.
// - replaceAll(): removes the extra spaces between words.

const cleaned = messy.trim().replace("Sarah", "Sarah's").replaceAll("   ", " ");

console.log(cleaned);

// TODO: Part three.
// Using the provided product string, log its length, the position at which a given word
// begins, and a slice containing exactly that word. Then split the provided comma-separated
// list and log the resulting pieces.

// * The provided product string and comma-separated list:
const product = "Sourdough Loaf, whole grain";
const flavorList = "rye,spelt,wheat,olive";

// * The provided product string and comma-separated list:
const product = "Sourdough Loaf, whole grain";
const flavorList = "rye,spelt,wheat,olive";

// Log the length of the product string
console.log(product.length);

// Find where the word "whole" begins
const start = product.indexOf("whole");
console.log(start);

// Slice out exactly the word "whole"
console.log(product.slice(start, start + "whole".length));

// Split the comma-separated list into an array
console.log(flavorList.split(","));

// TODO: Part four.
// From the net price and tax rate in the file, calculate the final price and log it inside a
// template literal, formatted to two decimal places. Add a comment explaining why the
// formatting step must come last.

// * The provided net price and tax rate:
const netPrice = 4.0;
const taxRate = 0.07;

// Calculate the final price
const finalPrice = netPrice * (1 + taxRate);

// toFixed() is used last because it converts the number into a string.
// All calculations should be completed while the value is still a number.
console.log(`Final price: $${finalPrice.toFixed(2)}`);
// TODO: Part five.
// Using the random recipe from this lesson, log a random whole number from 1 to 6. Then adapt
// the recipe to produce a number from 10 to 20, and explain your adaptation in a comment.

// Random whole number from 1 to 6
const randomOneToSix = Math.floor(Math.random() * 6) + 1;
console.log(randomOneToSix);

// Random whole number from 10 to 20
// We multiply by 11 because there are 11 possible numbers (10–20),
// use Math.floor() to make it a whole number, then add 10 so the
// range starts at 10 instead of 0.
const randomTenToTwenty = Math.floor(Math.random() * 11) + 10;
console.log(randomTenToTwenty);

// TODO: Part six.
// Open the MDN String reference, choose one method this lesson did not cover, and use it
// correctly on a string of your choice. In a comment, cite the method's name and describe what
// it does in one sentence of your own words.

// TODO: Part seven.
// Two classic exercises close the lesson. First, build a username generator: from a first name
// and a last name held in variables, produce a lowercase username in the pattern of first
// initial followed by full last name, such as mmustermann. Second, write a mad-libs story:
// declare four variables, an adjective, a noun, a verb, and a place, and log one short,
// ridiculous story built from a single template literal that uses all four.

// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
