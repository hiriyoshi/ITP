// variables: let, const, var
console.log("Hello World!");

// let is a mutable variable , it means it can be reused/edited again.
let firstName = "Miko";
console.log("First Name: ",firstName);

// const is immutable variable, it means that it cannot be edited again.
const lastName ="Morita";
console.log("Last Name: ",lastName);

// var is commonly used for function variable. It can only be used within the function that was called.
var variable ="I am a variable for functions";
console.log(variable);

// Data types

let age = 26;
console.log("Age:",age);
console.log("Data type of Age:", typeof age);

let name = "Miko";
console.log("Name:",name);
console.log("Data type of name:", typeof name);

let isAdmin = true;
console.log("IsAdmin",isAdmin);
console.log("Data type of IsAdmin:", typeof isAdmin);

let car = null;
console.log("Car?", car);
console.log("Data type of Car:", typeof car);

// 
let city;
console.log("City",city);
console.log("Data type of City:", typeof city);

//Operators

let digit = 20;
let number = 10;

console.log("Addition (+):", digit + number);
console.log("Subtraction (-):", digit - number);
console.log("Multiplication (*):", digit * number);
console.log("Division (/):", digit / number);
console.log("Exponent (**):", digit ** number);
console.log("Remainder (%):", digit % 6);

//PEMDAS , the order of the operations.
let answer = 10 + 20- 20 + (15 - 60) + 5 ** 5 + 10/ 2; 
console.log("Answer",answer);

let greeting = "Hi";
const myname = "my name is Slim Shady";
console.log(greeting + " " + myname);

console.log("Equal to (==):", 5 == 5);
console.log("Equal to (==) with type coersion:", 5 == "5");

// type coersion: convert the type if necessary
// Not Equal to: compare if two values are not equal
console.log("Not Equal to (!=):", 5 != 5);
console.log("Not Equal to (!=) with type coersion:", 5 != "5");

// Strict Equal to (===): Check if two values are equal in value and in data type.
console.log("Strict Equal to (===):", 5 === 5);
console.log("Strict Equal to (===) with type coersion:", 5 === "5");

// Strict Not Equal to (!==): Check if two values are not equal in value and in data type.
console.log("Strict Not Equal to (!==):", 5 !== 5);
console.log("Strict Not Equal to (!==) with type coersion:", 5 !== "5");

console.log("Greater Than (>):", 5 > 3);
console.log("Less Than (<):", 3 < 5);
console.log("Greater Than or Equal to (>=):", 5 >= 5);
console.log("Less Than or Equal to (<=):", 3 <= 3);

// 4. Logical Operators
// AND -  &&
// OR - ||
// NOT - !

let sunny = false;
let warm = true;

// AND: true if all of the condition are met, otherwise false
console.log("Is it sunny AND warm?", sunny && warm);

// OR: true if atleast one of the condition is met, otherwise false
console.log("Is it sunny OR warm?", sunny || warm);

// NOT: Invert the value of a boolean
console.log("NOT:", !sunny)


// 5. Assignment Expression
// Assigning a value to a variable
let num3 = 10;
let num4 = 20;

// Addition Assignment +=
num3 += num4
console.log("New value of Num 3:", num3);
// Computation: 10 + 20 = 30

// Subtraction Assignment -=
num3 -= num4
console.log("New value of Num 3:", num3);
// Computation: 30 - 20 = 10

// Multiplication Assignment *=
num3 *= num4
console.log("New value of Num 3:", num3);
// Computation: 10 * 20 = 200

// Division Assignment /=
num3 /= num4
console.log("New value of Num 3:", num3);
// Computation: 200 / 20 = 10

// Control Flow Structures

// 1. Conditional Statements
// Allow us to execute different blocks of code based on a condition.

// if, else if, else statement
// Conditional Block ()
// Code Block {}
let temperature = 22;
if (temperature < 0) {
    console.log("It's freezing!");
} else if (temperature >= 0 && temperature < 20) {
    // Range: 0 - 19
    console.log("It's cool outside.");
} else {
    console.log("It's warm outside.");
}


// switch-case statement
let day = "Friday";
switch (day) {
    case "Monday":
        console.log("It's the start of the week.");
        break;
    case "Friday":
        console.log("It's the end of the week days.");
        break;
    default:
        console.log("It's just a regular day.");
}

// 2. Looping Statements

// For Loop
// 1st: Variable Initialization
// 2nd: Condition Expression
// 3rd: Increment/Decrement
for (let i=1; i <= 3; i++){
    console.log("For Loop Count:", i);
}

// While Loop
let count = 4;
while(count <= 3){
    count++;
    console.log("While Loop Count:", count);
}

// Do-While Loop
let counter = 4;
do {
    console.log("Do-While Loop Count:", counter);
    counter++;
} while (counter <= 3);

// Functions
// Reusable block of code that can be executed whenever needed.

// 1. Function Definition
function greet() {
    console.log("Hello, welcome to the world of functions!");
    console.log("Let's gooo!!!");
}

// Calling a function
greet()
greet()
greet()


// 2. Function with Parameters
/*
    Parameter: placeholder.
    Arguments: values that will be passed to the functions parameters.
*/ 

function greetUser(name){
    console.log("Hello" + " " + name + "!");
}

greetUser("Miko");
greetUser("Ron");
greetUser("Julianne");

// Arrays
let fruits = ["Apple", "Banana", "Cherry",
    "Orange", "Chico"];

console.log("Fruits:", fruits);
console.log("Length of Fruits:", fruits.length);

console.log("First Fruit:", fruits[0]);
console.log("Last Fruit:", fruits[fruits.length - 1]);

// .slice(starting_index, ending_index(excluded)): access a portion of the array
let sliced_fruits = fruits.slice(1, 4);
console.log("Sliced Fruits:", sliced_fruits);
console.log("Fruits:", fruits);

// Update
fruits[0] = "Avocado";
console.log("Fruits:", fruits);

// .push(element) - add an element at the end of the array
fruits.push("Mango");
console.log("Fruits:", fruits);

// .pop() - delete an element at the end of the array.
fruits.pop()
console.log("Fruits:", fruits);

// .splice(starting_index, delete_count, element/s that you want to add) - add or delete elements at a specified index
fruits.splice(2, 1, "Mango", "Grape", "Strawberry");
console.log("Fruits:", fruits);

// Iterate over each element then we will apply a function.
fruits.forEach(function (fruit){
    console.log("Fruit:", fruit);
})