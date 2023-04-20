'use strict'

const files = require('./utils/file')
const Highlighter = require('./utils/Highligter')

const rawSourceCode = files.read('')
const matchCodeTagContentPattern = /<code>[\s\S]*<\/code>/i
let codeContent = rawSourceCode.match(matchCodeTagContentPattern)[0]

const highligter = new Highlighter(codeContent);

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

const styledSourceCode = rawSourceCode.replace(matchCodeTagContentPattern, highligter.styledCode)
files.write('styledSourceCode.html', styledSourceCode)