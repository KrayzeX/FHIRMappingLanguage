const fileSystem = require('fs');

let engine = {};

engine.getObjectFromFile = function(pathToFile){
    if(typeof pathToFile != "string"){
        throw new TypeError('Input argument must be string!');
    }
    const jsonFile = fileSystem.readFileSync(pathToFile);
    return jsonObject = JSON.parse(jsonFile); 
};

//console.log(getObjectFromFile("/home/kreez/Диплом/FHIRMappingLanguage/map/firstMap.json"));
module.exports = engine;

