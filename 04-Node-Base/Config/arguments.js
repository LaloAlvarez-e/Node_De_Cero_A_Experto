
module.exports = {
    printVersion,
    printHelp
};

const path = require('path');
const fs = require('fs');


function printHelp()
{
    console.log("Usage: node app.js --multiplicand <number> --multiplier <number>");
    console.log(`
    Usage: node app.js --multiplicand <number> --multiplier <number>

    Options:
        --multiplicand  The number to be multiplied (default: 1)
        --multiplier    The number to multiply with (default: 1)
        --help          Show this help message
        --verbose       Show the multiplication table in the console
        --version       Show the version number
    `);
}

function printVersion(applicationPath)
{
    let rc = 0;
    let packageJsonPath = undefined;
    let packageJsonData = undefined;
    let packageJson = undefined;
    if(0 === rc)
    {
        try 
        {
            const parentPath = path.dirname(applicationPath);
            packageJsonPath = path.join(parentPath, 'package.json');
            if((undefined === packageJsonPath) || (packageJsonPath === '') || (null === packageJsonPath))
            {
                rc = 1;
                console.error(`failed to find package.json`);
            }
        } 
        catch (error) 
        {
            rc = 2;
            console.error(`Error occurred while finding package.json: ${error.message}`);
        }
    }

    if(0 === rc)
    {
        try {
            packageJsonData = fs.readFileSync(packageJsonPath, 'utf8');
            if((undefined === packageJsonData) || (packageJsonData === '') || (null === packageJsonData))
            {
                rc = 3;
                console.error(`failed to read package.json`);
            }
        }
        catch (error) {
            rc = 4;
            console.error(`Error occurred while reading package.json: ${error.message}`);
        }
    }

    if(0 === rc)
    {
        try 
        {
            packageJson = JSON.parse(packageJsonData);
            if((undefined === packageJson.version) || (packageJson.version === '') || (null === packageJson.version))
            {
                rc = 5;
                console.error(`Version not found in package.json`);
            }
        }
        catch (err) 
        {
            rc = 6;
            console.error('Could not read version from package.json:', err.message);
        }
    }
    if(0 === rc)
    {
        console.log(`Package version: ${packageJson.version}`);
    }
}
