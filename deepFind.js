function deepFind(obj, path) {
    var paths = path.split('.')
    , current = obj
    , i;

    for (i = 0; i < paths.length; ++i) {
        if (current[paths[i]] == undefined) {
            return undefined;
        } else {
            current = current[paths[i]];
        }
    }
    return current;
};
module.exports = deepFind;

