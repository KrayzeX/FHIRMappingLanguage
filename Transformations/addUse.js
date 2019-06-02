var initData = require("../initData.js");

function addUse(oldVersionResource){
    let jsonObjectRes = initData.getObjectFromFile(oldVersionResource);

    jsonObjectRes.resource.use = "";

    console.log(jsonObjectRes.resource);
}

console.log(addUse("../OldResources/resource1.json"));
