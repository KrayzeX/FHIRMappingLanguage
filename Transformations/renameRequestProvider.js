var initDate = require("../initData.js");

function renameRequestProvider(oldVersionResource){

    let jsonObjectRes = initDate.getObjectFromFile(oldVersionResource);

    let saveVariable = jsonObjectRes.resource.requestProvider;

    //jsonObjectRes.resource.requestor = saveVariable;
    //delete jsonObjectRes.resource.requestProvider;

    console.log(jsonObjectRes.resource.requestProvider);
    console.log("----------");
    console.log(saveVariable);
    console.log("-----------");
    //console.log(jsonObjectRes.resource.requestor);
    //console.log("-----------");
    //console.log(Object.keys(jsonObjectRes.resource.requestor));

}

console.log(renameRequestProvider("../OldResources/resource1.json"));
