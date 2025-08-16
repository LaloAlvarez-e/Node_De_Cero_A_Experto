module.exports = {
    parseArgs
};

class ArgumentParser {
    constructor(args) {
        this.args = args;
        this.argumentNames = this.foundArguments();
        console.log("Argument Names:", this.argumentNames);
        //create a hashmap with all the argument names and their values
        this.parsedArgs = {};
        for (const argName of this.argumentNames) 
        {
            this.parsedArgs[argName] = this.parseArgument(argName);
        }
    }

    getKeys() {
        return Object.keys(this.parsedArgs);
    }

    foundArguments() {
        return this.args.filter(argName => argName.startsWith('-') || argName.startsWith('--'));
    }

    parseArgument(argumentName) {
        const index = this.args.indexOf(argumentName);
        let returnValue = undefined;
        if (index !== -1 && this.args.length > index + 1) 
        {
            const value = parseInt(this.args[index + 1]);
            if (isNaN(value) && typeof this.args[index + 1] === 'string' && (false === this.args[index + 1].startsWith('-')))
            {
                returnValue = this.args[index + 1];
            }
            else
            {
                returnValue = isNaN(value) ? 1 : value;
            }
        }
        else if(index !== -1)
        {
            returnValue = true;
        }
        return returnValue;
    }
}

function parseArgs(args) 
{
    const parser= new ArgumentParser(args);
    const structure = parser.getKeys();
    const parsedArgs = {};

    //iterate over the entry structure
    for (const entry of structure) 
    {
        // Remove the first two dashes at the beginning, if present
        const entryWithoutPrefix = entry.replace(/^-{1,2}/, '');
        parsedArgs[entryWithoutPrefix] = parser.parsedArgs[entry];
    }
    return parsedArgs;
}