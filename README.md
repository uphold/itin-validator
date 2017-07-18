# itin-validator
Validate and mask a U.S. Individual Taxpayer Identification Number (ITIN).

## Status
[![npm version][npm-image]][npm-url] [![build status][travis-image]][travis-url]

## Installation
Install the package via `npm`:

```sh
npm install itin-validator --save
```

## Usage
### `isValid(value)`
This method validates if the given value is a valid `Individual Taxpayer Identification Number`.

#### Arguments
1. `value` _(*)_: The value to validate.

#### Returns
_(boolean)_:  Returns whether the input value is a valid ITIN or not.

#### Example

```js
isValid({});
// => false

isValid('9-0-0700000');
// => false

isValid('900-70-0000');
// => true

isValid('900700000');
// => true
```

--------------------------------------------------------------------------------

### `mask(value)`
This method will help you protect this sensitive piece of information by obfuscating some digits.

#### Arguments
1. `value` _(*)_: The value to mask.

#### Returns
_(string)_: Returns the masked value by replacing value certain digits by 'X'.

#### Example

```js
mask({});
// Throws an Error.

mask('9-0-0700000');
// Throws an Error.

mask('900-70-0000');
// => XXX-XX-0000

mask('900700000');
// => XXXXX0000
```

--------------------------------------------------------------------------------

## Tests
To test using a local installation of `node.js`:

```sh
npm test
```

To test using Docker exclusively:

```sh
docker-compose run --rm sut
```

## Release

```sh
npm version [<newversion> | major | minor | patch] -m "Release %s"
```

## License
MIT

[npm-image]: https://img.shields.io/npm/v/itin-validator.svg?style=flat-square
[npm-url]: https://npmjs.org/package/itin-validator
[travis-image]: https://img.shields.io/travis/uphold/itin-validator.svg?style=flat-square
[travis-url]: https://img.shields.io/travis/uphold/itin-validator.svg?style=flat-square
