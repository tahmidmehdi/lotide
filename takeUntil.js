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

const takeUntil = function(array, callback) {
    const output = [];
    for (let item of array) {
        if (callback(item)) {
            return output;
        } else {
            output.push(item);
        }
    }
    // if no item satisfies the callback, return the whole array
    return output;
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results1, [1, 2, 5, 7, 2]);
assertArraysEqual(results2, ['I\'ve', 'been', 'to', 'Hollywood']);
assertArraysEqual(takeUntil([], x => x < 0), []);
assertArraysEqual(takeUntil([1, 2], x => x < 0), [1, 2]);
assertArraysEqual(takeUntil([1, 2, 3], x => x < 10), []);
