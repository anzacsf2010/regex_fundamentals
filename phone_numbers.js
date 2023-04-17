'use strict'

const phoneNumbers = '(456) 934-2904' +
    '(456) 907-7854' +
    '323-762-8977' +
    '234.456-7869' +
    '432.093.3421' +
    '234 456-7869' +
    '(432) 093.3421' +
    '234 095 7684';

console.log(phoneNumbers);

const phoneMatch = /(\(\d{3}\)\s|\d{3}[-\.])\d{3}[-\.]\d{4}/gm

console.log("the acceptable phone numbers are: " + phoneNumbers.match(phoneMatch));