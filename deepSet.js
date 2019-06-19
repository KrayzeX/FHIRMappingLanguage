//not working

function deepSet(object, path, value){
    var i;
    path = path.split(".");
    for (i = 0; i < path.length; i++)
        object = object[path[i]];

    object[path[i]] = value;

    return object;
}

console.log(deepSet(obj, "a.b.d", 5));
