'use strict'

// Exercise 8: Type checker

// Write a program that checks the data types of two variables and logs to the console SAME TYPE if they are the same type. If they are different types log Not the same....

// Declare 4 variables: 2 must be strings and 2 must be objects

let x = "Just Do It!"
let y = "Never give up!"
let car = {
    brand : "BMW",
    engine : 2.0,
    color : "red",
};
let house = {
    type : "apartment",
    color : "white",
    room : 4,
};

// Create 6 conditional statements, where for each you check if the data type of one variable is the same as the other
// Find out how to check the type of a variable
// Write 2 console.log statements to log the type of 2 variables, each with a different data type


console.log(typeof x);
console.log(typeof car);

// Now compare the types of your different variables with one another
// Log Not the same... when the types are different

if (typeof x == typeof y){
    console.log("SAME TYPE");
} else{
    console.log("Not the same...");
}

if (typeof x == typeof car){
    console.log("SAME TYPE");
} else{
    console.log("Not the same...");
}

if (typeof x == typeof house){
    console.log("SAME TYPE");
} else{
    console.log("Not the same...");
}

if (typeof y == typeof car){
    console.log("SAME TYPE");
} else{
    console.log("Not the same...");
}

if (typeof y == typeof house){
    console.log("SAME TYPE");
} else{
    console.log("Not the same...");
}

if (typeof car == typeof house){
    console.log("SAME TYPE");
} else{
    console.log("Not the same...");
}
