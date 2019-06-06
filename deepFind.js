function deepFind(obj, path) {
    /**
     * Функция получает элемент из объекта по переданному пути
     *
     * @author Алексей Чистяков <alexey.chisti@gmail.com>
     * @param {object} obj - объект, внутри которого идет поиск элемента
     * @param {string} path - путь внутри объекта, по которому необходимо получить элемент
     */
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

