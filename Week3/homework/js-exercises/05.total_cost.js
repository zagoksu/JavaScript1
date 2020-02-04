'use strict'

function calculateTotalPrice(price){

let total = 0;
for (let key in price) {
     total += price[key];
}      
return total;
}
      
let cartForParty = {
    beers: 4.99,
    chips: 2.75,
    nuts: 3.75,
    cola: 1.99,
    cake: 5.45,
};
    
console.log(calculateTotalPrice(cartForParty));

//  second way 
/*

cartForParty = {
    beers: 4.99,
    chips: 2.75,
    nuts: 3.75,
    cola:0.99,
    cake:5.45 };

function calculateTotalPrice(price){
  let sum = 0;
  for (let cart of Object.values(cartForParty)) {
    sum += cart;
  }

  return sum; 
}


console.log(calculateTotalPrice(cartForParty));

}

*/