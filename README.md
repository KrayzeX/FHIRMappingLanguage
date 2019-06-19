# FHIR Mapping Language
Describes the implementation of FHIR Mapping Language. It is necessary to trnasfer FHIR resources from one version of FHIR standart to another.

## The main part of implementation is mappingEngine.js
The engine works automatically. It receives a transformation map as input and applies it to the old version of the resource.

The code snippet is shown below.

```
//JavaScript code

    for (let i = 0; i < 3 /*jsonObjectMap.transformations.length*/; i++){

        let oldPathFromMap = jsonObjectMap.transformations[i].oldPath.toString();
        oldPathFromMap = oldPathFromMap.split(',');
        oldPathFromMap = oldPathFromMap.join('.');
        //console.log(oldPathFromMap);

        let operation = jsonObjectMap.transformations[i].op.toString();

        let newPathFromMap = jsonObjectMap.transformations[i].newPath.toString();
        newPathFromMap = newPathFromMap.split(',');
        newPathFromMap = newPathFromMap.join('.');
        //console.log(operation);

        let elementFromPath = takeElement(jsonObjectRes, oldPathFromMap);
        //console.log(elementFromPath);
        //console.log(newPathFromMap);
        //console.log('=========');

        switch(operation){
        case 'move':
            setElement(newPathFromMap, saveResource, elementFromPath);
            deepDelete(oldPathFromMap, saveResource);
            break;
        case 'add':
            setElement(newPathFromMap, saveResource, {});
            break;
        default:
            new Error('Operations are not find!');
        }
    }

```
## How it works
Example
![example](https://user-images.githubusercontent.com/25884047/59758336-5af0f000-9296-11e9-97d2-9e55bfbb9cea.png)
