function deepDelete(target, context) {
    // Assume global scope if none provided.
    context = context || window;

    var targets = target.split('.');

    if (targets.length > 1)
        deepDelete(targets.slice(1).join('.'), context[targets[0]]);
    else
        delete context[target];

    return context;
}

module.exports = deepDelete;

//console.log(deepDelete('a.b', obj));
