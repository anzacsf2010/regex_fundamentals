'use strict'

const strText = "This is to say hello to everyone who want to say hi to a cool dude! I am sure many of you from around the world would love it too. There are simple tools to use in my town";
console.log(strText);

const regexpInstance = new RegExp('to', 'igm');
const result1 = regexpInstance.exec(strText);
console.log(regexpInstance);
console.log(result1);

const regexLiteral = /to/gmi;
const result2 = regexLiteral.exec(strText);
console.log(regexLiteral);
console.log(result2);