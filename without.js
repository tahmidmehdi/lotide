const without = function(source, itemsToRemove) {
    let filtered_source = [];
    for (var i = 0; i < source.length; ++i) {
        if (!itemsToRemove.includes(source[i])) {
            filtered_source.push(source[i])
        };
    };
    return filtered_source;
};

module.exports = without;
