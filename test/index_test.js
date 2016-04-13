
/**
 * Module dependencies.
 */

import should from 'should';
import { isValid, mask } from '../src';

/**
 * `Individual Taxpayer Identification Number` samples.
 */

const numbers = {
  invalid: ['900-700-000', '900#70#0000', '900  70--0000', '9-0-0    70 0000'],
  valid: ['900-70-0000', '999-70 9999', '900 70 9999', '900700000']
};

/**
 * Test `itin-validator`.
 */

describe('ItinValidator', () => {
  describe('isValid()', () => {
    it('should return `false` if number is invalid', () => {
      numbers.invalid.forEach(number => isValid(number).should.be.false());
    });

    it('should return `true` if number is valid', () => {
      numbers.valid.forEach(number => isValid(number).should.be.true());
    });
  });

  describe('mask()', () => {
    it('should throw an error if value is invalid', () => {
      try {
        mask(numbers.invalid[0]);

        should.fail();
      } catch (e) {
        e.should.be.instanceOf(Error);
        e.message.should.equal('Invalid Individual Taxpayer Identification Number');
      }
    });

    it('should mask a valid value', () => {
      mask(numbers.valid[0]).should.equal('XXX-XX-0000');
      mask(numbers.valid[1]).should.equal('XXX-XX 9999');
      mask(numbers.valid[2]).should.equal('XXX XX 9999');
      mask(numbers.valid[3]).should.equal('XXXXX0000');
    });
  });
});
