# Individual Taxpayer Identification Numbers (ITIN)

[![npm version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]

This modules allows you to check if a number is a valid.

## Installation

Choose your preferred method:

* npm: `npm install --save is-valid-itin`
* Download: [is-valid-itin](https://github.com/seegno/is-valid-itin)

## Usage

*NOTE:* The input number **must not** be formated to `xxx-xx-xxxx`.

> Check if number is valid.

```js
import isValidItin from 'is-valid-itin';

isValidItin('xxxxxxxxx');
```

> Mask the number.

```js
import { mask } from 'is-valid-itin';

mask('xxxxxxxxx');
```

## Running tests

```sh
npm test
```

[npm-image]: https://img.shields.io/npm/v/is-valid-itin.svg?style=flat-square
[npm-url]: https://npmjs.org/package/is-valid-itin
[travis-image]: https://img.shields.io/travis/seegno/is-valid-itin.svg?style=flat-square
[travis-url]: https://travis-ci.org/seegno/is-valid-itin
