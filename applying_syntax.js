'use strict'

const stringPattern = /(".*")/g;
const keywordPattern = /\b(package|public|class|static|if|else)\b/g;
const typesPattern = /\b(int|void)\b/g;
const multilinePattern = /(\/\*[\s\S]*\*\/)/g;
const singlelinePattern = /(\/\/.*)/g;

highligter
    .setColor(stringPattern, 'ce9178')
    .setColor(keywordPattern, 'd857cf')
    .setColor(typesPattern, 'd857cf')
    .setColor(multilinePattern, '267703')
    .setColor(singlelinePattern, '267703');