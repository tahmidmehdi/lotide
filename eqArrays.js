const assertEqual = function(actual, expected) {
    if (actual === expected) {
        console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
    } else {
        console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`)
    };
};

const eqArrays = function(arr1, arr2) {
    let output = true
    if (arr1.length !== arr2.length) return false;
    // arrays are equal if we get here
    for (var i = 0; i < arr1.length; ++i) {
        if (arr1[i] !== arr2[i]) {
            output = false
        };
    };
    return output;
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays(["1", "2"], ["1", "2"]), true);
assertEqual(eqArrays(["1", "2"], ["1", 2]), false);
assertEqual(eqArrays([], []), true);
assertEqual(eqArrays([], [1]), false);