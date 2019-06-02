var initData = require("../initData.js");

function addPreAuthPeriod(oldVersionResource){

    let jsonObjectRes = initData.getObjectFromFile(oldVersionResource);

    jsonObjectRes.resource.preAuthPeriod = null;

    console.log(jsonObjectRes);
}

console.log(addPreAuthPeriod("../OldResources/resource1.json"));
