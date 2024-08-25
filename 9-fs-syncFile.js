const { readFileSync, writeFileSync } = require('fs');

const firstFile = readFileSync('./content/first.txt', 'utf-8');
const secondFile = readFileSync('./content/second.txt', 'utf-8');

console.log(firstFile, secondFile);

const newFile=writeFileSync(
    './content/result-sync.txt',
    `Here is the new file: ${firstFile} and ${secondFile}`)