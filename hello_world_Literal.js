'use strict'

const strText = "This is to say hello to everyone who want to say hi to a cool dude! I am sure many of you from around the world would love it too. There are simple tools to use in my town";
console.log(strText);

const regexLiteral = /to/;
const result1 = regexLiteral.exec(strText);
const result2 = strText.match(regexLiteral);
console.log(regexLiteral);
console.log(result1);
console.log(result2);