module.exports = {
    parseArgs
};

function parseArgument(args, argumentName) {
    const index = args.indexOf(argumentName);
    if (index !== -1 && args.length > index + 1) {
        const value = parseInt(args[index + 1]);
        return isNaN(value) ? 1 : value;
    }
    return 1;
}

function parseMultiplicand(args) {
    const mutiplicandValue = parseArgument(args, '--multiplicand');   
    return mutiplicandValue;
}

function parseMultiplier(args) {
    const multiplierValue = parseArgument(args, '--multiplier');
    return multiplierValue;
}

function parseArgs(args) {
    const parsedArgs = {
        multiplicand: 1,
        multiplier: 1
    };

    parsedArgs.multiplicand = parseMultiplicand(args);
    parsedArgs.multiplier = parseMultiplier(args);
    return parsedArgs;
}