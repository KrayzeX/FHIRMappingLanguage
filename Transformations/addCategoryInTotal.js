var initData = require('../initData.js');

function addCategoryInTotal(oldVersionResource){

    let jsonObjectRes = initData.getObjectFromFile(oldVersionResource);

    jsonObjectRes.resource.total.category = null;

}
