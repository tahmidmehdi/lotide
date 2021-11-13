const assertEqual = function(actual, expected) {
    if (actual === expected) {
        console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
    } else {
        console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`)
    };
};

const findKeyByValue = function(obj, val) {
    for (const k of Object.keys(obj)) {
        if (obj[k] === val) {
            return k;
        };
    };
    return undefined;
};

const bestTVShowsByGenre = { 
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
};
  
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

const TVShowsByGenre = { 
    sci_fi: 1,
    comedy: 2,
    drama:  3,
    action: 1
};
  
assertEqual(findKeyByValue(TVShowsByGenre, 2), "comedy");
assertEqual(findKeyByValue(TVShowsByGenre, 1), "sci_fi");
