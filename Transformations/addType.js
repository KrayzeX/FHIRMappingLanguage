var initData = require("../initData.js");

function addType(oldVersionResource){

    let jsonObjectRes = initData.getObjectFromFile(oldVersionResource);
    jsonObjectRes.resource.type = "";

}
