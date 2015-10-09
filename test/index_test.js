
/**
 * Module dependencies.
 */

import { default as isValidItin, mask } from '../src';

/**
 * ITIN sample numbers.
 */

const invalidNumbers = [
  '00070000',
  '10070000',
  '20070000',
  '30070000',
  '40070000',
  '50070000',
  '60070000',
  '70070000',
  '80070000',
  '90000000',
  '90010000',
  '90020000',
  '90030000',
  '90040000',
  '90050000',
  '90060000',
  '90089000',
  '90089000',
  '90093000'
];
const validNumbers = [
  '900700000',
  '900709999',
  '999709999',
  '900880000',
  '900889999',
  '999889999',
  '900900000',
  '900909999',
  '999909999',
  '900920000',
  '900929999',
  '999929999',
  '900940000',
  '900949999',
  '999949999',
  '900990000',
  '900999999',
  '999999999'
];

/**
 * Test.
 */

describe('isValidItin', () => {
  describe('default()', () => {
    it('should return `false` if itin is invalid', () => {
      for (const itin of invalidNumbers) {
        isValidItin(itin).should.be.false();
      }
    });

    it('should return `true` if itin is valid', () => {
      for (const itin of validNumbers) {
        isValidItin(itin).should.be.true();
      }
    });
  });

  describe('mask()', () => {
    it('should mask a valid itin', () => {
      mask('900709999').should.equal('XXXXX9999')
    });

    it('should throw an error if itin is invalid', () => {
      try {
        mask('00070000');

        should.fail();
      } catch (e) {
        e.should.be.instanceOf(Error);
        e.message.should.equal('Invalid Individual Taxpayer Identification Number');
      }
    });
  });
});
