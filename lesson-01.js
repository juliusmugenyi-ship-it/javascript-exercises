"use strict";

// Lesson 01 exercise: Running JavaScript three ways
// Clone the exercise repository for this course, https://github.com/Leon-Arno/JS-Exercises, to
// your computer.
// Make the copy your own. Inside the cloned folder, delete the `.git` folder to remove the
// connection to the original repository: run `rm -rf .git` on macOS and Linux, or `Remove-Item
// -Recurse -Force .git` in PowerShell on Windows.
// Run `git init` in the folder, create a new empty repository named `javascript-exercises` on
// your own GitHub account, connect it as the remote, and push. This is the same publishing
// flow you performed in the Git course.
// Create a branch named `lesson-01-exercise` and switch to it, then open `lesson-01.js`. The
// questions are already inside as comments; work through them in order, writing your answers
// directly beneath each one.

// TODO: Part one.
// Start the Node REPL and evaluate at least four arithmetic expressions of your own, using
// more than one operator across them. Copy the complete session transcript and paste it into
// `lesson-01.js` as a comment block where the question asks for it.

/* Welcome to Node.js v24.18.0.
Type ".help" for more information.
> 4 + 6
10
> 20 * 3 - 2
58
> 200/20+10
20
> 200 / 20 + 10
20
> (4 + 2) * 2
12
> (3*3) / 3
3
 */

// TODO: Part two.
// Write a `console.log` line in `lesson-01.js` that prints a greeting, save the file
// deliberately, and run it with `node lesson-01.js`.

console.log("Hello, lesson-01.js");

// TODO: Part three.
// Change the greeting text, run the file again without saving, and observe that the output has
// not changed. Save and run once more, then describe in a one-sentence comment what happened
// and why.

/*Before saving it prints an empty line and prints the greeting line after saving.*/

// TODO: Part four.
// Run your greeting line in the Chrome DevTools Console. In a comment, record one way the
// experience matched Node and one way it differed.

/* Like Node, Chrome DevTools executes JavaScript and displays the console output. (Hello, lesson-01.js)
Unlike Node, it runs inside a browser environment with access to browser features like the DOM. (Documents object model) */

// TODO: Part five.
// From a folder that does not contain the file, deliberately run `node lesson-01.js` so that
// the terminal reports it cannot find the file. Paste that error transcript as a comment, then
// explain in one sentence how you resolved it.

/*JuliusMugenyi@Juliuss-MacBook-Pro JS-Exercises % cd ..
JuliusMugenyi@Juliuss-MacBook-Pro ~ % node lesson-01.js
node:internal/modules/cjs/loader:1520
  throw err;
  ^

//Error: Cannot find module '/Users/JuliusMugenyi/lesson-01.js'//


    at Module._resolveFilename (node:internal/modules/cjs/loader:1517:15)
    at wrapResolveFilename (node:internal/modules/cjs/loader:1071:27)
    at defaultResolveImplForCJSLoading (node:internal/modules/cjs/loader:1095:10)
    at resolveForCJSWithHooks (node:internal/modules/cjs/loader:1122:12)
    at Module._load (node:internal/modules/cjs/loader:1294:5)
    at wrapModuleLoad (node:internal/modules/cjs/loader:255:19)
    at Module.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:154:5)
    at node:internal/main/run_main_module:33:47 {
  code: 'MODULE_NOT_FOUND',
  requireStack: []
}
 */

/*Resolved the issue after returning into the folder containing lesson-01.js before running the command one more time */

// TODO: Save the file, commit your work with a clear message, push the branch, and open a pull
// request into your main branch.
// TODO: Submit the link to the pull request for review.
