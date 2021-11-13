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

const without = function(source, itemsToRemove) {
    let filtered_source = [];
    for (var i = 0; i < source.length; ++i) {
        if (!itemsToRemove.includes(source[i])) {
            filtered_source.push(source[i])
        };
    };
    return filtered_source;
};

assertArraysEqual(without([1, 2, 3], [1]), [2, 3])
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"])
assertArraysEqual(without([1, 2, 3], [1, 2, 3]), [])
assertArraysEqual(without([1, 2, 3], []), [1, 2, 3])
assertArraysEqual(without([], [1]), [])
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
