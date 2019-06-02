var initData = require("../initData.js");

function addAmountInTotal(oldVersionResource){
    let jsonObjectRes = initData.getObjectFromFile(oldVersionResource);

    jsonObjectRes.resource.total.amount = null;
}
