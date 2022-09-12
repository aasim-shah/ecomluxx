
const fs = require('fs');

const allFileContents = fs.readFileSync('feeds.txt', 'utf-8');
allFileContents.split(/\r?\n/).forEach(line =>  {
  
  console.log(`Line from file: ${line}`);
  
});
const used = process.memoryUsage().heapUsed / 1024 / 1024;
console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`);