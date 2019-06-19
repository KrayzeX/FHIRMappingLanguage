# FHIR Mapping Language
Describes the implementation of FHIR Mapping Language. It is necessary to trnasfer FHIR resources from one version of FHIR standart to another.

## The main part of implementation is mappingEngine.js
The engine works automatically. It receives a transformation map as input and applies it to the old version of the resource.

The code snippet is shown below.

![example](https://github.com/KrayzeX/FHIRMappingLanguage/tree/master/Examples/exampleEngine.png)
