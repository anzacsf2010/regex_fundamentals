'use strict'

const zipCodes = `12345-6789
34267-33
45647 33
86730
8593-2847
85683
09583-23482
095874-9585
75638 2838
75638-3838
756383838`;

console.log("Given zip codes are: " + zipCodes);

const matchZip = /^\d{5}(?:-\d{4})?$/gm;

console.log("From the list, the proper zip codes are: " + zipCodes.match(matchZip));