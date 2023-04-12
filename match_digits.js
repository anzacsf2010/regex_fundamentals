'use strict'

const strText = "116 Winners circle Hessmer, Louisiana, LA, 71341";

console.log(strText);

const digits = /\d/g; // any digit
const alt_digits = /[0-9]/g;

const odd_digits = /[13579]/g;
const even_digits = /[02468]/g;

const vowels = /[aeiou]/g

console.log('Digits: ' + strText.match(digits));
console.log('Digits (Alternative): ' + strText.match(alt_digits));
console.log('Odd Digits: ' + strText.match(odd_digits));
console.log('Even Digits: ' + strText.match(even_digits));
console.log('Vowels: ' + strText.match(vowels));