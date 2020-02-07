'use strict'

function giveCompliment(name){
    let compliment = ['awesome', 'great', 'smart', 'perfect', 'courageous', 'humorous', 'bold', 'unique', 'creative', 'marvelous' ]
    let randomComp = compliment[Math.floor(Math.random() * compliment.length -1)]
    return console.log(`"You are ${randomComp}, ${name}!"`);
};

giveCompliment("Noer");
giveCompliment("Noer");
giveCompliment("Noer");