'use strict'

const phone1 = "(222) 555-1234";
const phone2 = "(333) 555-1234";
const phone3 = "(444) 555-1234";

console.log(phone1);
console.log(phone2);
console.log(phone3);

const areaCode = /\(...\)/g // for any single character
console.log(phone1.match(areaCode));
console.log(phone2.match(areaCode));
console.log(phone3.match(areaCode));

const question = "Do you have a driver's licence?";
const answer = "yes";

const checkAnswer = /YES|NO|yes|Yes|no|No/
console.log(answer.match(checkAnswer));
console.log(checkAnswer.test(answer));