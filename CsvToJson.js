const fs = require('fs');
const path = require('path');

const parseCsvLinesToArray = (file) => {
    const matchLineBreak = /\r?\n/;
    return file.trim().split(matchLineBreak);
}

const composeMatchingCsvRowRegex = (csvColumns) => {
    const csvColumnToNamedCapturingGroup = (currentColumn, currentIndex, array) => {
        const isLastIndex = currentIndex + 1 === array.length;
        const shouldAddSeparator = isLastIndex === false;
        return `(?<${currentColumn}>.+)${shouldAddSeparator ? ',' : ''}`;
    }

    const matchCsvColumnStringPattern = csvColumns.map(csvColumnToNamedCapturingGroup);

    return new RegExp(matchCsvColumnStringPattern);
}

const convertToJson = (csvPath) => {
    const csvFile = fs.readFileSync(csvPath).toString();
    const csvFileArray = parseCsvLinesToArray(csvFile);
    const [headerRow] = csvFileArray.splice(0, 1);
    const csvColumns = headerRow.split(',');
    const matchRowDataRegex = composeMatchingCsvRowRegex(csvColumns);

    return csvFileArray.map((currentRow) => {
        const matchInfo = currentRow.match(matchRowDataRegex);
        return matchInfo.groups;
    });
}

const exportJsonFile = (jsonCollection) => {
    const outputDirPath = path.join(__dirname, 'output');
    if (!fs.existsSync(outputDirPath)) fs.mkdirSync(outputDirPath);

    const outputPath = path.join(__dirname, 'output', 'data.json');
    fs.writeFileSync(outputPath, JSON.stringify(jsonCollection));
    console.log(`File available at: \n${outputPath}`);
}

const filePath = path.join(__dirname, 'data', 'data.csv');
const result = convertToJson(filePath);

exportJsonFile(result);

