'use strict'

let myScore = 77;
let grade;

//This function converts score percentage to grade.
function gradeCalculation(score){
    
    if (score >= 90) {
        grade = "A";
      }
    else if (score >= 80) {
        grade = "B";
      }
    else if (score >= 70) {
        grade = "C";
      }
    else if (score >= 60) {
        grade = "D";
      }
    else if (score >= 50) {
        grade = "E";
      }
    else {
        grade = "F";
      }
    return `You got a ${grade} (${score}%)!`;
}
// this command will log the grade which function.
console.log(gradeCalculation(myScore));



/* 
I converted if/else to switch statement.

let myScore = 77;
let grade;
let score;

function scoreToGrade(score) {

    switch(true) {
        case score >= 90: 
          grade = 'A';
          break;
        case score >= 80: 
          grade = 'B';
          break;
        case score >= 70:
          grade = 'C'; 
          break;
        case score >= 60: 
          grade = 'D';
          break;
        case score >= 50:
          grade = 'E'; 
          break;
        default: 
         grade = 'F'
                  
      }
return `You got a ${grade} (${score}%)!`
}

console.log(scoreToGrade(myScore));

*/


