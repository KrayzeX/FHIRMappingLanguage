set-deep
========

Helper for setting the value of a nested object property

## Install

```sh
$ npm install set-deep
```

## Usage

```js
var set = require('set-deep')

var target = {
    person: {
        address: {
            country: ''
        }
    }
}
set('person.address.country', target, 'France')
//or
set(['person', 'address', 'country'], target, 'France')

//or
var setCountry = set('person.address.country')
setCountry(target, 'France')

//or
var setCountryOnTarget = set('person.address.country', target)
setCountryOnTarget('UK')
```

## Tests

```sh
$ make
```

## License

```
MIT
```