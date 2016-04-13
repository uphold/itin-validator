# itin-validator
Validate and mask U.S. Individual Taxpayer Identification Numbers.

## Status
[![npm version][npm-image]][npm-url] [![build status][travis-image]][travis-url]

## Installation
Install the package via `npm`:

```sh
npm install itin-validator --save
```

## Usage

### `isValid(value, [options])`

This method validates if the given value is a valid `Individual Taxpayer Identification Number`.

#### Arguments

1. `value` *(&#42;)*: The value to validate.
2. `[options]` *(Object)*: The options object.
3. `[options.strict=true]` _(boolean|string)_: Whether or not formatting characters such as dashes or spaces should be rejected and if they must be in their precise location.

#### Returns
*(boolean)*:  Returns `true` if `value` is a valid Individual Taxpayer Identification Number, else `false`.

#### Example
```js
isValid({});
// => false

isValid('900-70-0000');
// => false

isValid('9-0-0700000', { strict: false });
// => true

isValid('9-0-0700000', { strict: 'format' });
// => false

isValid('900-70-0000', { strict: 'format' });
// => true

isValid('900700000');
// => true
```
--------------------------------------------------------------------------------

### `mask(value, [options])`

This method will help you protect this sensitive piece of information by obfuscating some digits.

#### Arguments

1. `value` *(&#42;)*: The value to mask.
2. `[options]` *(Object)*: The options object.
3. `[options.strict=true]` _(boolean|string)_: Whether or not formatting characters such as dashes or spaces should be rejected and if they must be in their precise location.

#### Returns
*(string)*: Returns the masked value.

#### Example
```js
mask({});
// Throws an Error.

mask('900-70-0000');
// Throws an Error.

mask('9-0-0700000', { strict: false });
// => X-X-XXX0000

mask('9-0-0700000', { strict: 'format' });
// Throws an Error.

mask('900-70-0000', { strict: 'format' });
// => XXX-XX-0000

mask('900700000');
// => XXXXX0000
```

* * *

## Tests
To test using a local installation of `node.js`:

```sh
npm test
```

To test using Docker exclusively (similarly to what is done in Travis CI):

```sh
npm run testdocker
```

## Release

```sh
npm version [<newversion> | major | minor | patch] -m "Release %s"
```

## License
MIT

## Credits

Many thanks to [miguelmota/is-valid-ssn](https://github.com/miguelmota/is-valid-ssn) for the original inspiration.

[npm-image]: https://img.shields.io/npm/v/ssn-validator.svg?style=flat-square
[npm-url]: https://npmjs.org/package/ssn-validator
[travis-image]: https://img.shields.io/travis/seegno/ssn-validator.svg?style=flat-square
[travis-url]: https://img.shields.io/travis/seegno/ssn-validator.svg?style=flat-square
