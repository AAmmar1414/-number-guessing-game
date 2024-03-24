"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var sysgenno = Math.floor(Math.random() * 100);
var answers = await inquirer_1.default.prompt([
    {
        type: "number",
        name: "guessuser",
        message: "Guess user a number :",
    }
]);
var guessuser = answers.guessuser;
console.log(guessuser, "guessuser", sysgenno, "sysgenno");
if (guessuser == sysgenno) {
    console.log("Hurray ! you guessed the right number\n you won");
}
else {
    console.log("Sorry ! you guessed the wrong number\n better luck next time");
}
