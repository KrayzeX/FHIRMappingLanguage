var initData = require("../initData.js");

function addTotal(oldVersionResource){
    let jsonObjectRes = initData.getObjectFromFile(oldVersionResource);

    jsonObjectRes.resource.total = {};


    console.log(jsonObjectRes);
}

console.log(addTotal("../OldResources/resource1.json"));
