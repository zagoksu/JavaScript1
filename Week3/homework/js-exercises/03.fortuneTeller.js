'use strict'
let numChildren =[2, 3, 5, 7, 11];
let partnerNames= ['Jane', 'Sophia', 'Eleni', 'Lara', 'Angela'];
let locations = ['Amsterdam', 'Utrecht', 'Berlin', 'Paris', 'Den Haag'];
let jobs = ['police', 'medewerker', 'doctor', 'teacher', 'painter'];

function tellFortune(number, name, location, jobtitle){
let randomNum= numChildren[Math.floor(Math.random() * numChildren.length)];
let randomPartner= partnerNames[Math.floor(Math.random() * partnerNames.length)];
let randomLoc= locations[Math.floor(Math.random() * locations.length)];
let randomJob= jobs[Math.floor(Math.random() * jobs.length)];

    return console.log(`"You will be a ${randomJob} in ${randomLoc}, and married to ${randomPartner} with ${randomNum} kids."`)

}
tellFortune(numChildren, partnerNames, locations, jobs);
