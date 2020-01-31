'use strict'
let dinner = {
    Meal: 'Pizza',
    Servings: 4,
    Ingredients:["4 olives", "2 strips of sausage", "1 tsp salt/pepper"]  
};

  for (let property in dinner){
     console.log(`${property}: ${dinner[property]}`)
  };

