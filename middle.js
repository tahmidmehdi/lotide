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

module.exports = middle;
