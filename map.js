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

const map = function(array, callback) {
    const results = [];
    for (let item of array) {
        results.push(callback(item));
    }
    return results;
}

const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
console.log(results1);
assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);
assertArraysEqual(map([1, 2, 3], num => num * 2), [2, 4, 6]);
assertArraysEqual(map([], num => num * 2), []);
assertArraysEqual(map([1], num => 0), [0]);
