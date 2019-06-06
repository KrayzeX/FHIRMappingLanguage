'use strict'

var F     = require('functionally')
var curry = F.curry

var re = /(.*?)\[(.*?)\](.*)/

/**
 * @ignore
 *
 * Returns the value from the given path in object.
 *
 *
 * Example:
 *      window.App = { version: {major: 10} }
 *
 *      getNestedValue('App.version.major') == 10
 *
 *      getNestedValue('person.name', { person: {name: 'test'}}) == 'test'
 *
 * @param {String} path
 * @param {Object} [object]
 *
 * @return {Mixed} The value
 */
 function withNestedValue(path, object, value, config){
    var properties = Array.isArray(path)?
                        path:
                        getProperties(path),
        i     = 0,
        len   = properties.length,
        next  = object,
        key,
        nextKey,
        prev,
        prevKey,
        doSet = arguments.length >= 3,
        force = config && config.force

    for (; i < len; i++ ){

        key = properties[i]

        if (!doSet || (doSet && i < len - 1) ){

            if (next == null || typeof next != 'object' || ! (key in next) ){

                if (doSet && force){
                    nextKey   = properties[ i + 1 ]
                    next[key] = nextKey * 1 == nextKey && nextKey != '' ?
                                    []:
                                    {}
                } else {
                    return undefined
                }
            }
            prev    = next
            prevKey = key
            next    = next[key]
        }
    }

    if (doSet){
        if (force && prev && (next == null || typeof next != 'object')){
            next = prev[prevKey] = {}
        }

        if ( key && next != null ) {
            next[key] = value
        }
    }

    return next
}

function getProperties(path){
    var paths = path.split('.'),
        i     = 0,
        len   = paths.length,
        key,
        propertyAccess,
        propertyRoot,
        propertyMember,
        theRest,
        nextIndex,

        result = []

    for (; i < len; i++ ){

        key = paths[i].trim()
        propertyAccess = re.exec(key)

        if (propertyAccess){
            //when key is person[name]
            //the propertyRoot is person
            //and propertyMember is name
            //
            //when key is [0]
            //propertyRoot is ''
            //and propertyMember is 0

            propertyRoot   = propertyAccess[1]
            propertyMember = propertyAccess[2]
            theRest        = propertyAccess[3]

            nextIndex = i + 1

            if (propertyRoot){
                key = propertyRoot
                len++
                paths.splice(nextIndex++, 0, propertyMember)
            } else {
                key = propertyMember
            }

            if (theRest){
                len++
                paths.splice(nextIndex++, 0, theRest)
            }

        }

        result.push(key)
    }

    return result
}

function getNestedValue(name, object){
    return withNestedValue(name, object || global)
}

function setNestedValue(name, value, object){
    return withNestedValue(name, object || global, value)
}

function forceSetNestedValue(name, value, object, config){
    config = config || {}
    config.force = true
    return withNestedValue(name, object || global, value, config)
}

var GET = curry(function(path, object){
    return getNestedValue(path, object)
})

var SET = curry(function(path, object, value){
    return setNestedValue(path, value, object)
})

var FORCE = curry(function(path, object, value, config){
    return forceSetNestedValue(path, value, object, config)
}, 3)

SET.get = GET
SET.force = FORCE
SET.getProperties = getProperties

module.exports = SET