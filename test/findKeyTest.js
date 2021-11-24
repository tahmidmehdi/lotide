const assertEqual = require('../assertEqual');
const findKey = require('../findKey');

assertEqual(findKey({
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma");
assertEqual(findKey({
    "Blue Hill": 1,
    "Akaleri": 3,
    "noma": 2,
    "elBulli": 3,
    "Ora": 2,
    "Akelarre": 3
}, x => x === 2), "noma");
assertEqual(findKey({}, x => x === 2), undefined);
assertEqual(findKey({
    "Blue Hill": 1,
    "Akaleri": 3,
    "noma": 2,
    "elBulli": 3,
    "Ora": 2,
    "Akelarre": 3
}, x => x === 10), undefined);
