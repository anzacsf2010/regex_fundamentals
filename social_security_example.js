'use strict'

const ssString = '456-93-2904' +
    '456-90-78754' +
    '323.76-8977' +
    '234-456-7869' +
    '432-09-3421' +
    '234-09-57684';

console.log(ssString);

const ssMatch = /[0-9]{3}-[0-9]{2}-[0-9]{4}/gm

console.log('Proper social security numbers are: ' + ssString.match(ssMatch));