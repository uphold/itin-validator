
/**
 * Module dependencies.
 */

import should from 'should';
import { isValid, mask } from '../src';

/**
 * `Individual Taxpayer Identification Number` samples.
 */

const numbers = {
  invalid: ['00070000', '100_70_000', '20070000f', '300#70#000'],
  valid: {
    format: ['900-70-0000', '900 70 9999', '999-70 9999', '900 88 0000'],
    soft: ['9-0-0    70 0000', '90 0 7 0 9999', '99  --9-70 999 9', '- 900 88 0000 -'],
    strict: ['900700000', '900709999', '999709999', '900880000']
  }
};

/**
 * Test `itin-validator`.
 */

describe('ItinValidator', () => {
  describe('isValid()', () => {
    it('should return false if number is invalid', () => {
      for (let i = 0; i < numbers.invalid.length; i++) {
        isValid(numbers.invalid[i], { strict: 'format' }).should.be.false();
        isValid(numbers.invalid[i], { strict: false }).should.be.false();
        isValid(numbers.invalid[i], { strict: true }).should.be.false();
      }
    });

    it('should return true for strict and formatted numbers if strict is format', () => {
      const invalid = [].concat(numbers.invalid, numbers.valid.soft);
      const valid = [].concat(numbers.valid.format, numbers.valid.strict);

      for (let i = 0; i < invalid.length; i++) {
        isValid(invalid[i], { strict: 'format' }).should.be.false();
      }

      for (let i = 0; i < valid.length; i++) {
        isValid(valid[i], { strict: 'format' }).should.be.true();
      }
    });

    it('should return true for all valid numbers if strict is false', () => {
      const valid = [].concat(numbers.valid.format, numbers.valid.soft, numbers.valid.strict);

      for (let i = 0; i < numbers.invalid.length; i++) {
        isValid(numbers.invalid[i], { strict: false }).should.be.false();
      }

      for (let i = 0; i < valid.length; i++) {
        isValid(valid[i], { strict: false }).should.be.true();
      }
    });

    it('should return true only for strict numbers if strict is true', () => {
      const invalid = [].concat(numbers.invalid, numbers.valid.format, numbers.valid.soft);
      const valid = numbers.valid.strict;

      for (let i = 0; i < invalid.length; i++) {
        isValid(invalid[i], { strict: true }).should.be.false();
      }

      for (let i = 0; i < valid.length; i++) {
        isValid(valid[i], { strict: true }).should.be.true();
      }
    });

    it('should be `strict` by default', () => {
      isValid(numbers.valid.format[0]).should.be.false();
      isValid(numbers.valid.soft[0]).should.be.false();
      isValid(numbers.valid.strict[0]).should.be.true();
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
      mask(numbers.valid.format[0], { strict: 'format' }).should.equal('XXX-XX-0000');
      mask(numbers.valid.soft[0], { strict: false }).should.equal('X-X-X    XX 0000');
      mask(numbers.valid.strict[0], { strict: true }).should.equal('XXXXX0000');
    });
  });
});
