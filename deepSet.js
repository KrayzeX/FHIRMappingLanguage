var obj = {
    "a": {
        "b": {
            "c": "privet"
        }
    }
};

function deepSet(object, path, value){

    path = path.split(".");
    let current = object;


}

console.log(deepSet(obj, "a.b.d", 5));
