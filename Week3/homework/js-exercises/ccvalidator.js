'use strict'
let cardNum;

function validateCards(cardNum){

    if(cardNum.length === 16 && cardNum % 2 === 0 && digitSum(cardNum) >= 16 && sameDigit(cardNum) === false){
        return `"Your credit card with number ${cardNum}  is valid."`
    } else {
        return `"Your credit card with number ${cardNum}  is invalid."`
    }
};


// to check the last integer of the card number
function digitSum (number) {
   let sum = 0;
  while (number) {
    sum += number % 10;
    number = Math.floor(number / 10);
  }
     return sum
};

// to check if digits of the card number is the same or not
function sameDigit(number){
    for(var i = 0; i < number.length; i++){
        if(number[0] != number[i])
            return false;
    }
    return true;
};

console.log(validateCards("1111111111111110"));
console.log(validateCards("222222dfdf322220"));
console.log(validateCards("1229920030333090"));
console.log(validateCards("4444444444444444"));
console.log(validateCards("5454543421432311"));
console.log(validateCards("11125434214321"));