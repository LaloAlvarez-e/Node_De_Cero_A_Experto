
//convert approach to Async or promise-based

module.exports = {
    createMultiMultiplicationTableFile
};

function multiply(a, b) {
    return a * b;
}

function getMultiplyTable(multiplicand = 1, multiplier = 1)
{
    let resultString = "";
    for (let currentMultiplier = 1; currentMultiplier <= multiplier; currentMultiplier++) 
    {
        const result = multiply(multiplicand, currentMultiplier);
        resultString += `${multiplicand} x ${currentMultiplier}\t= ${result}\n`;
    }
    return (resultString);
}       

function writeErrorHandler(error) 
{
    const fs = require('fs');
    fs.appendFileSync('error.txt', `${new Date().toISOString()} - ${error}\n`);
}

async function writeMultiplyTable(fileName, data)
{
    const fs = require('fs');
    let myPromise = new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, (error) => {
            if (!error) {
                console.log(`Multiplication table saved to ${fileName}`);
                resolve();
            }
            else {
                console.error(`Error writing file ${fileName}:`, error);
                writeErrorHandler(error);
                reject(error);
            }
        });
    });
    return myPromise;
}

function writeHeader(multiplicand) {
    let header = "=========================\n";
    header += `Multiplication Table (${multiplicand})\n`;
    header += "=========================\n";
    return header;
}


async function createMultiplicationTableFile(multiplicand = 1, multiplier = 1) 
{
    let resultString = writeHeader(multiplicand);
    resultString += getMultiplyTable(multiplicand, multiplier);
    console.log(resultString);
    await writeMultiplyTable(`multiplication_table_${multiplicand}.txt`, resultString);

}

async function createMultiMultiplicationTableFile(multiplicand = 1, multiplier = 1) 
{
    let returnCode = 0;
    for (let currentMultiplicand = 1; currentMultiplicand <= multiplicand; currentMultiplicand++) 
    {
        try
        {
            await createMultiplicationTableFile(currentMultiplicand, multiplier);
        }
        catch (error)
        {
            console.error("Error creating multiplication table:", error);
            returnCode = 1;
        }
    }

    return (returnCode);
}


