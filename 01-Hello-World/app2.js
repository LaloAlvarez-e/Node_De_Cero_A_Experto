
function sayHello(name) {
    return `Hey Hello ${name}`;
}

const mySaluteCallback = sayHello;

let mySalute = mySaluteCallback("Laloa");
console.log(mySalute);
