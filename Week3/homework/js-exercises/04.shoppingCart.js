'use strict'

let groceryList = ['bananas', 'milk'];

function addToShoppingCart(grocery) {
    
  groceryList.push(grocery);
    
    if (groceryList.length > 3) {
        groceryList.shift();
    }
    return `'You bought ${groceryList}!'`;
}

console.log(addToShoppingCart('pineapple'));
console.log(addToShoppingCart('orange'));
console.log(addToShoppingCart('plum'));


 /*  I tried to add random grocery from grocerylist as a second way 

function addToShoppingCart(grocery){
    shoppingCart.push(groceryList[Math.floor(Math.random() * groceryList.length)])
     if (shoppingCart.length > 3){
      shoppingCart.shift();
    }
  
  return `"You bought ${shoppingCart}!"`
  }
  let shoppingCart = ["bananas", " milk"];
  let groceryList = ["meat", "pineapple", "orange", "pear", "eggs", "water", "juice"]
  
  console.log(addToShoppingCart());
  console.log(addToShoppingCart());
  console.log(addToShoppingCart());

  */