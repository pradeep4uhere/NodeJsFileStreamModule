const fs = require('fs');
const readFile = fs.readFileSync('file.txt','utf-8');
console.log(readFile);


const write ="This is my new paragrah for file";
fs.writeFileSync('outputfile.txt',write);
console.log("File Written successfuilly");