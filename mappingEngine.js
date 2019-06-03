var initData = require("./initData.js");
var fs = require("fs");


function mappingEngine(oldVersionResource, mapOfTtansformation){

    let jsonObjectRes = initData.getObjectFromFile(oldVersionResource);
    let jsonObjectMap = initData.getObjectFromFile(mapOfTtansformation);

    let saveResource = jsonObjectRes;

    //console.log(jsonObjectRes);
    //console.log('=======================');
    //console.log(saveResource);

    for (let i in jsonObjectMap.transformations){
        if (jsonObjectMap.transformations[i].op == "add" && jsonObjectMap.transformations[i].newPath == "subType"){
            saveResource.resource.subType = "";

        }
    }


    for (let i in jsonObjectMap.transformations){
        if (jsonObjectMap.transformations[i].op == "add" && jsonObjectMap.transformations[i].newPath == "type"){
            saveResource.resource.type = "";
        }
    }

    for (let i in jsonObjectMap.transformations){
        if (jsonObjectMap.transformations[i].op == "add" && jsonObjectMap.transformations[i].newPath == "use"){
            saveResource.resource.use = "";
        }
    }

    for (let i in jsonObjectMap.transformations){
        if (jsonObjectMap.transformations[i].oldPath[0] == "item" && jsonObjectMap.transformations[i].oldPath[1] == "sequenceLinkId" && jsonObjectMap.transformations[i].op == "move"){
            saveResource.resource.item[0].itemSequence = jsonObjectRes.resource.item[0].sequenceLinkId;
            delete saveResource.resource.item[0].sequenceLinkId;
        }
    }

    for (let i in jsonObjectMap.transformations){
        if(jsonObjectMap.transformations[i].oldPath[0] == "requestProvider" && jsonObjectMap.transformations[i].op == "move" && jsonObjectMap.transformations[i].newPath == "requestor"){
            saveResource.resource.requestor = jsonObjectRes.resource.requestProvider;
            delete saveResource.resource.requestProvider;
        }
    }

    for (let i in jsonObjectMap.transformations){
        if(jsonObjectMap.transformations[i].op == "add" && jsonObjectMap.transformations[i].newPath == "total"){
            saveResource.resource.total = {};
        }
    }

    /*for (let i in jsonObjectMap.transformations){
        if (jsonObjectMap.transformations[i].oldPath[0] == "total" && jsonObjectMap.transformations[i].op == "add" && jsonObjectMap.transformations[i].newpath[0] == "total" && jsonObjectMap.transformations[i].newPath[1] == "amount"){
            saveResource.resource.total.amount = "";
        }
    }*/

    console.log('====================');
    //console.log(saveResource.resource.item[0]);
    console.log('====================');
    console.log(saveResource.resource.total);
    //console.log(Object.keys(saveResource.resource.item[0]));
    //console.log(Object.keys(jsonObjectMap.transformations[0].oldPath));

    var saveJsonData = JSON.stringify(saveResource, undefined, 2);
    fs.writeFile("./newResource/newResourseVersion.json", saveJsonData, function(err){
        if (err){
            console.log(err);
        }
    });
}


console.log(mappingEngine("./OldResources/resource1.json", "./Maps/ClaimResponseMap.json"));
