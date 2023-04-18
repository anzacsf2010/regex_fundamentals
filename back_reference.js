'use strict'

const sentence = '/src' +
    '- ListItem.js' +
    '- Form.ts' +
    '- Button.ts';

console.log("Given sentence: " + sentence);

const regValue = /(\w+)\.(js|ts)/g;

console.log("We replace ts with tsx and js with jsx while also add the word User in front:");
console.log('The result is: ' + sentence.replace(regValue, "User$1.$2x "));

// Positive lookahead:
const sString = "Today's contributions:" +
    "€ 30.00 " +
    "£ 15.00 " +
    "$ 25.00 " +
    "¥ 1200.25 ";

console.log(sString);

const lookaheadReg = /\D\s(?=\d+\.\d+)/g;

console.log("The currency of the contributions are: " + sString.match(lookaheadReg));