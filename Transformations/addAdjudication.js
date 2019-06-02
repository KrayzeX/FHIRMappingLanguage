var initData = require('../initData.js');

function addAdjudication(oldVersionResource){
    let jsonObjectRes = initData.getObjectFromFile(oldVersionResource);
    jsonObjectRes.resource.adjudication = null;

    console.log(jsonObjectRes.resource);
}

console.log(addAdjudication("../OldResources/resource1.json"));
