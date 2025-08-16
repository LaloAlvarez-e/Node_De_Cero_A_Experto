const { createMultiMultiplicationTableFile } = require('./helpers/multiply');
const { parseArgs } = require('./helpers/parsingArgs');

const { printVersion, printHelp } = require('./Config/arguments');
const commands = parseArgs(process.argv);

const path = commands["path"] || '.'; // Set default path
console.log("Parsed Commands:", commands);

//console.clear();
if((commands["help"] !== undefined) || (commands["h"] !== undefined))
{
    printHelp();
}
else if((commands["version"] !== undefined) || (commands['v'] !== undefined))
{
    printVersion(process.argv[1]);
}
else if ((commands["multiplicand"] !== undefined) && (commands["multiplier"] !== undefined))
{
    console.log(`Creating multiplication tables for ${commands["multiplicand"]} x ${commands["multiplier"]}...`);
    (async () => {
        try {

            const verboseEnable = (commands["verbose"] || commands["v"]) ? true : false;
            await createMultiMultiplicationTableFile(commands["multiplicand"], commands["multiplier"], verboseEnable, path);
        } catch (error) {
            console.error("Error:", error);
        }
    })();
}

