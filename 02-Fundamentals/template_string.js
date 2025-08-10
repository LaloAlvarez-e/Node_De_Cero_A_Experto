//template strings are useful to create HTML templates

const superHeroName = "Deadpool";
const superHeroRealName = "Wade Wilson";

const template = `
    <div>
        <h1>${superHeroName}</h1>
        <p>Real Name: ${superHeroRealName}</p>
    </div>
`;

const jsonFormat = JSON.stringify({
    name: superHeroName,
    realName: superHeroRealName,
}, null, 2);

console.log(`The superhero ${superHeroName} is actually ${superHeroRealName}.`);
console.log("Template HTML:");
console.log(template);
console.log("JSON Format:");
console.log(jsonFormat);