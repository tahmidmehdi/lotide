const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

// TEST CODE
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays(["1", "2"], ["1", "2"]), true);
assertEqual(eqArrays(["1", "2"], ["1", 2]), false);
assertEqual(eqArrays([], []), true);
assertEqual(eqArrays([], [1]), false);
