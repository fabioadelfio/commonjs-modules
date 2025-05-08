const name = require(`./names.js`);
const hobbiesList = require(`./hobbies.js`);

function person() {
    const fullName = name (`Fabio`, `Adelfio`);
    const hobbies = hobbiesList (`Informatica`, `Calcio`, `PS5`);

    return {
        fullName,
        hobbies
    };
};

console.log(person());