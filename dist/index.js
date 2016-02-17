'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mask = mask;

/**
 * See `http://www.irs.gov/Individuals/General-ITIN-Information` for more information.
 *
 * An Individual Taxpayer Identification Number (ITIN) is a tax processing number issued by the Internal Revenue Service.
 * It is a nine-digit number that always begins with the number 9 and has a range of 70-88 in the fourth and fifth digit.
 * Effective April 12, 2011, the range was extended to include:
 *
 *  - 900-70-0000 through 999-88-9999
 *  - 900-90-0000 through 999-92-9999
 *  - 900-94-0000 through 999-99-9999
 */

var expression = /^(9\d{2})((7[0-9]{1}|8[0-8]{1})|(9[0-2]{1})|(9[4-9]{1}))(\d{4})$/;

/**
 * Validate function.
 */

function isValid(itin) {
  return expression.test(itin);
}

/**
 * Masks the ITIN with "X" placeholders to protect sensitive data,
 * while keeping some of the original digits for contextual recognition.
 *
 * E.g. "123456789" -> "XXXXX6789"
 */

function mask(itin) {
  if (!isValid(itin)) {
    throw new Error('Invalid Individual Taxpayer Identification Number');
  }

  return itin.substr(0, itin.length - 4).replace(/[\w]/g, 'X') + itin.substr(-4);
}

/**
 * Export default.
 */

exports.default = isValid;