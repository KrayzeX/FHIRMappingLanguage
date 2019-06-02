var initDate = require("../initData.js");

function renameSequenceLinkIdInDetail(oldVersionResource){

    let jsonObjectRes = initDate.getObjectFromFile(oldVersionResource);

    //let saveVariable = jsonObjectRes.resource.item

    console.log(Object.keys(jsonObjectRes.resource));
}

console.log(renameSequenceLinkIdInDetail("../OldResources/resource1.json"));


//Ask quesion about resource
