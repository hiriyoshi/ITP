const prompt = require('prompt-sync')();
let input = parseInt(prompt("Enter the base number:"));
let inputexp = parseInt(prompt("Enter the exponential:"));

let result = input ** inputexp;
console.log("The result of Exponential:",result);