//create a class of a super here with name, last name, power and superName
class SuperHero {
    constructor(name, lastName, power, superName, age) {
        this.name = name;
        this.lastName = lastName;
        this.power = power;
        this.superName = superName;
        this.age = age;
    }

    getName() {
        return this.name;
    }

    getLastName() {
        return this.lastName;
    }

    getPower() {
        return this.power;
    }

    getSuperName() {
        return this.superName;
    }

    printInfo() {
        const { name, lastName, power, superName, age } = this;
        console.log(`Name: ${name}`);
        console.log(`Last Name: ${lastName}`);
        console.log(`Power: ${power}`);
        console.log(`Super Name: ${superName}`);
        console.log(`Age: ${age}`);
    }
}

function printExternalInfo({ name, lastName, power, superName, age }) {
    console.log(`Name: ${name}`);
    console.log(`Last Name: ${lastName}`);
    console.log(`Power: ${power}`);
    console.log(`Super Name: ${superName}`);
    console.log(`Age: ${age}`);
}

const Deadpool = new SuperHero("Wade", "Wilson", "Regeneration", "Deadpool", 30);


Deadpool.printInfo();
console.log("--------");
printExternalInfo(Deadpool);