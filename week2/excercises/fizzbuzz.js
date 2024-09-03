const prompt = require('prompt-sync')();

for(let i=1;i<=20;i++){
    if(i % 3==0 && i % 5==0){
        console.log("current number ", i ," FizzBuzz");
    }
    else if(i % 3==0){
        console.log("current number ", i ," Fizz");
    }
    else if(i % 5==0){
        console.log("current number ", i ," Buzz");
    }
    
    else{
        console.log("current number ", i);
    }
}