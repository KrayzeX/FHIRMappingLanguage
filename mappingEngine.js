var initData = require("./initData.js");
var takeElement = require('./deepFind.js');
var fs = require("fs");
var setElement = require('set-deep');
var objectPath = require('object-path');

var jsonObjectRes = initData.getObjectFromFile('./oldResources/resource1.json');
var jsonObjectMap = initData.getObjectFromFile('./Maps/ClaimResponseMap.json');
var saveResource = Object.assign({},jsonObjectRes);

function mappingEngine(oldVersionResource, mapOfTtansformation){
    /**
     * Движок, который преобразует старый ресурс в новый по полученной карте
     *
     * @author Алексей Чистяков <alexey.chisti@gmail.com>
     * @param {object} oldVersionResource - ресурс прошлой версии стандарта
     * @param {object} mapOfTtansformation - карта преобразований
     *
     */

    for (let i = 0; i < 3 /*jsonObjectMap.transformations.length*/; i++){

        let oldPathFromMap = jsonObjectMap.transformations[i].oldPath.toString();
        oldPathFromMap = oldPathFromMap.split(',');
        oldPathFromMap = oldPathFromMap.join('.');
        //console.log(oldPathFromMap);

        let operation = jsonObjectMap.transformations[i].op.toString();

        let newPathFromMap = jsonObjectMap.transformations[i].newPath.toString();
        newPathFromMap = newPathFromMap.split(',');
        newPathFromMap = newPathFromMap.join('.');
        //console.log(operation);

        let elementFromPath = takeElement(jsonObjectRes, oldPathFromMap);
        //console.log(elementFromPath);
        //console.log(newPathFromMap);
        //console.log('=========');

        switch(operation){
        case 'move':
            setElement(newPathFromMap, saveResource, elementFromPath);
            objectPath.del(saveResource, oldPathFromMap);
            break;
        case 'add':
            setElement(newPathFromMap, saveResource, {});
            break;
        default:
            new Error('Operations are not find!');
        }
    }

    //console.log(jsonObjectMap.transformations[0].oldPath);

    var saveJsonData = JSON.stringify(saveResource, undefined, 4);
    fs.writeFile("./newResource/newResourseVersion.json", saveJsonData, function(err){
        if (err){
            console.log(err);
        }
        });
}


//console.log(getPath(jsonObjectMap));
console.log(mappingEngine("./OldResources/resource1.json", "./Maps/ClaimResponseMap.json"));
