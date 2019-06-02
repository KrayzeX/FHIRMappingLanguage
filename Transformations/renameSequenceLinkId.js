var initData = require("../initData.js");


function renameSequenceLinkId(oldVersionResource){

    let jsonObjectRes = initData.getObjectFromFile(oldVersionResource);
    let saveVariable = jsonObjectRes.resource.item[0].sequenceLinkId;
    delete jsonObjectRes.resource.item[0].sequenceLinkId;
    jsonObjectRes.resource.item[0].itemSequence = saveVariable;
    //console.log(saveVariable);
    //console.log('_________________');
    return(jsonObjectRes.resource.item[0].itemSequence);
    //console.log(typeof(jsonObjectRes.resource.item[0].itemSequence));
    //console.log('_________________');
    //return Object.keys(jsonObjectRes.resource.item[0]);
}


console.log(renameSequenceLinkId("../OldResources/resource1.json"));
