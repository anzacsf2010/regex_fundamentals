'use strict'

const IPAddresses = '172.0.1.23 ' +
    '255.255.0.29 ' +
    '789.98.389.90 ' +
    '249.267.8.0 ' +
    '249.247.8.0 ';

const matchingIP = "(?:\\d{1,2}|1\\d\\d|2[0-4]\\d|25[0-5])";
const IPV4Pattern = `\\b${matchingIP}\\.${matchingIP}\\.${matchingIP}\\.${matchingIP}\\b`;
const IPV4Regex = new RegExp(IPV4Pattern, 'g');

console.log("Proper IPV4 addresses from the list are: " + IPAddresses.match(IPV4Regex));