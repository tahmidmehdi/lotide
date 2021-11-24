const findKey = function (obj, callback){
    for (let k of Object.keys(obj)){
        if (callback(obj[k])) {
            return k;
        }
    }
    return undefined;
};

module.exports = findKey;
