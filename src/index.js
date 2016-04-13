
/**
 * An Individual Taxpayer Identification Number (ITIN) is a tax processing number issued by the Internal Revenue Service.
 * It is a nine-digit number that always begins with the number 9 and has a range of 70-88 in the fourth and fifth digit.
 * Effective April 12, 2011, the range was extended to include:
 *
 *  - 900-70-0000 through 999-88-9999
 *  - 900-90-0000 through 999-92-9999
 *  - 900-94-0000 through 999-99-9999
 *
 * See `http://www.irs.gov/Individuals/General-ITIN-Information` for more information.
 */

/**
 * Expression.
 */

const expression = /^(9\d{2})[- ]{0,1}((7[0-9]{1}|8[0-8]{1})|(9[0-2]{1})|(9[4-9]{1}))[- ]{0,1}(\d{4})$/;

/**
 * Validate function.
 */

export function isValid(value) {
  return expression.test(value);
}

/**
 * Mask the ITIN with "X" placeholders to protect sensitive data,
 * while keeping some of the original digits for contextual recognition.
 *
 * E.g. "123456789" -> "XXXXX6789", "123-45-6789" -> "XXX-XX-6789".
 */

export function mask(value) {
  if (!isValid(value)) {
    throw new Error('Invalid Individual Taxpayer Identification Number');
  }

  return `${value.substr(0, value.length - 4).replace(/[\w]/g, 'X')}${value.substr(-4)}`;
}
