const prompt = require('prompt-sync')();

let input = parseInt(prompt("enter your grade:"));

if (isNan(input)||input<0){
}
else if(input>=90){
    console.log(`Your grade is A`);
}
else if(input>=80 & 89>=input){
    console.log("Your grade is B");
}
else if(input>=70 & 79>=input){
    console.log("Your grade is C");
}
else if(input>=60 & 69>=input){
    console.log("Your grade is D");
}
else{
    console.log("Your grade is F");
}
