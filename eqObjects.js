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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
    if (Object.keys(object1).length !== Object.keys(object2).length) {
        return false;
    };
    for (const k of Object.keys(object1)) {
        if (Array.isArray(object1[k]) && Array.isArray(object2[k])) {
            if (!eqArrays(object1[k], object2[k])) {
                return false;
            }
        } else if (!Array.isArray(object1[k]) && !Array.isArray(object2[k])) {
            if (object1[k] !== object2[k]) {
                return false;
            }
        } else {
            // one value is array, other isn't
            return false;
        }
    };
    return true;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);
