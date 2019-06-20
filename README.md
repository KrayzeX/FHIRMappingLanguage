# FHIR Mapping Language
Describes the implementation of FHIR Mapping Language. It is necessary to transfer FHIR resources from one version of FHIR standart to another.

## How to install it
```
npm install fhirmapping
```

## The main part of implementation is mappingEngine.js
The engine works automatically. It receives a transformation map as input and applies it to the old version of the resource.

The code snippet is shown below.

```
//JavaScript code

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

![Снимок экрана от 2019-06-19 13-59-58](https://user-images.githubusercontent.com/25884047/59760278-9a214000-929a-11e9-927a-032675b1a981.png)
