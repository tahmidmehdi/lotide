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

const assertArraysEqual = function(arr1, arr2) {
    if (eqArrays(arr1, arr2)) {
        console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`)
    } else {
        console.log(`🔴🔴🔴 Assertion Failed: ${arr1} !== ${arr2}`)
    };
};

assertArraysEqual([1, 2], [1, 2])
assertArraysEqual(["1", "2"], ["1", "2"])
assertArraysEqual(["1", "2"], ["1", 2])
assertArraysEqual([], [])
assertArraysEqual([], [1])
