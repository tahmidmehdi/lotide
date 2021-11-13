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

const middle = function(arr) {
    let midIndex = 0;
    if (arr.length <= 2) {
        return [];
    } else if (arr.length%2 === 0) {
        // even length
        midIndex = arr.length / 2;
        return arr.slice(midIndex-1, midIndex+1);
    } else {
        midIndex = Math.floor(arr.length / 2);
        return [arr[midIndex]];
    };
};

// TEST CODE
assertArraysEqual(middle([]), [])
assertArraysEqual(middle([1]), [])
assertArraysEqual(middle([1, 2]), [])
assertArraysEqual(middle([1, 2, 3]), [2])
assertArraysEqual(middle([1, 2, "3", 4, 5]), ["3"])
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3])
assertArraysEqual(middle(["1", "2", "3", "4", "5", "6"]), ["3", "4"])
