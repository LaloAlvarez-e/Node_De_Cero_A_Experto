const { createMultiMultiplicationTableFile } = require('./helpers/multiply');
const { parseArgs } = require('./helpers/parsingArgs');

const { multiplicand, multiplier } = parseArgs(process.argv);

console.clear();
console.log(`Creating multiplication tables for ${multiplicand} x ${multiplier}...`);


createMultiMultiplicationTableFile(multiplicand, multiplier);
