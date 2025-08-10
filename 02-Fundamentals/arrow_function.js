function legacySum(a, b) {
    return a + b;
}

const arrowSum = (a, b) => a + b;

const arrowSumWithBody = (a, b) => {
    return a + b;
};

const arrowSumWithImplicitReturn = (a, b) => a + b;


console.log(legacySum(5, 3)); // 8
console.log(arrowSum(5, 4)); // 8
console.log(arrowSumWithBody(5, 5)); // 8
console.log(arrowSumWithImplicitReturn(5, 6)); // 8