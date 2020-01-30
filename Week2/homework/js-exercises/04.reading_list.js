'use strict'

let books = [
  {title: 'Lontano', author: 'Jean-Christophe Grangé', alreadyRead:true},
  {title: 'The Prince', author: 'Machiavelli', alreadyRead:false},
  {title: 'Kafka on the Shore', author: 'Haruki Murakami', alreadyRead:true}      
];  

for(let book of books){
    console.log(`"${book.title} by ${book.author}"`);
    if(book.alreadyRead === true){
        console.log(`You already read "${book.title}"`);
    }else{
        console.log(`You still need to read "${book.title}"`)
    }
}


