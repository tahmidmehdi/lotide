const assertArraysEqual = require('../assertArraysEqual');

// TEST CODE
assertArraysEqual([1, 2], [1, 2])
assertArraysEqual(["1", "2"], ["1", "2"])
assertArraysEqual(["1", "2"], ["1", 2])
assertArraysEqual([], [])
assertArraysEqual([], [1])
