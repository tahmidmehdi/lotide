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

module.exports = takeUntil;
