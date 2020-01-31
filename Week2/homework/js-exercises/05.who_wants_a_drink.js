'use strict'

let drinkTray = [];

const drinkTypes = ["cola", "lemonade", "water"];

for (let i = 0; i < 5; i++){

    drinkTray.push(drinkTypes[i%drinkTypes.length]); // This code will add a drink respectively to drinkTray.
};

console.log(`Hey guys, I brought a ${drinkTray.join(', ')}!`);

