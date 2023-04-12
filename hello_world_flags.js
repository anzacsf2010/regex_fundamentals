'use strict'

const strText = "This is to say hello to everyone who want to say hi to a cool dude! I am sure many of you from around the world would love it too. There are simple tools to use in my town";
console.log(strText);

console.log('Using RegExp');

const regexpInstance = new RegExp('to', 'igm');
let result1 = "";
while (result1 = regexpInstance.exec(strText)) {
    console.log(result1);
}

console.log('--------------');
console.log('Using Literal');

const regexLiteral = /to/gmi;
let result2 = "";
while (result2 = regexLiteral.exec(strText)) {
    console.log(result2);
}