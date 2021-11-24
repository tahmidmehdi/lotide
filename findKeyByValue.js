const findKeyByValue = function(obj, val) {
    for (const k of Object.keys(obj)) {
        if (obj[k] === val) {
            return k;
        };
    };
    return undefined;
};

module.exports = findKeyByValue;
