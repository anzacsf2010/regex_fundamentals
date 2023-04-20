'use strict'

const passStrings = `$abc 
#thatsabigpassword! 
ThisPasswordIsHumongous!
lowercasepassword
mypasswoRD$1
CAPITALPASSWORD
myPa$sw0RD`;

const matchPassword = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[#!@$])(?=.*\d).{6,20}$/gm;

console.log(passStrings.match(matchPassword));