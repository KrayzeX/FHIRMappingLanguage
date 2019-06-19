# FHIR Mapping Language
Describes the implementation of FHIR Mapping Language. It is necessary to trnasfer FHIR resources from one version of FHIR standart to another.

## The main part of implementation is mappingEngine.js
The engine works automatically. It receives a transformation map as input and applies it to the old version of the resource.

The code snippet is shown below.

![exampleEngine](https://user-images.githubusercontent.com/25884047/59756959-6b539b80-9293-11e9-8d97-9693bdc2e723.png)
