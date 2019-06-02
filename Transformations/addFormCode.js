var initDate = require("../initData.js");

function addFormCode(oldVersionResource){

    let jsonObjectRes = initDate.getObjectFromFile(oldVersionResource);

    jsonObjectRes.resource.formCode = null;

    console.log(jsonObjectRes.resource);
}

console.log(addFormCode("../OldResources/resource1.json"));
