const prompt = require('prompt-sync')();

let inputentry = parseInt(prompt("Give a number to start with:"));
if(isNaN){
    
}
let inputend = parseInt(prompt("Give a number to start with:"));
let numbrange = inputend - inputentry;

console.log(numbrange);

for(let i=0; i<=numbrange;i++){
    console.log(inputentry);
    inputentry++;
}