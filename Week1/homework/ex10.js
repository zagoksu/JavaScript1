'use strict'

// Exercise 10: Compare arrays

// Declare 2 variables, that each hold an array. The first array should have 4 items, the second 7 items
// Find out how to get the length of each array. Write a console.log statement that shows the length of each array

const arrayCountries = ["Germany", "Netherlands", "Belgium", "France"];

console.log('The length of the array is' + ' ' + `${arrayCountries.length}`);


const arrayContinents = ["Asia", "Europe", "North America", "South America", "Antartica", "Australia", "Africa"];

console.log('The length of the array is' + ' ' + `${arrayContinents.length}`);


// Write a conditional statement that checks if both are of equal length. If they are, log to the console They are the same!, if not log Two different sizes

if (arrayCountries.length == arrayContinents.length) {

    console.log('They are the same!')
}else{
    console.log('Two different sizes')
}