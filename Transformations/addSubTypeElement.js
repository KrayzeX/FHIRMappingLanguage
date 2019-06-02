var initData = require("../initData.js");

function addSubType(oldVersionResource){

    let jsonObjectRes = initData.getObjectFromFile(oldVersionResource);
    jsonObjectRes.resource.subType = null;

    console.log(jsonObjectRes); 
}

console.log(addSubType("../OldResources/resource1.json"));
