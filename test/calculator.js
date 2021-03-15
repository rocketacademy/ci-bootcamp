import { expect } from 'chai';

import { add, subtract } from '../calculator.js';

describe('Calculator', function () {
  describe('Basic Operations', function () {
    it('Adds two numbers', function () {
      const result = add(2, 2);
      expect(result).to.equal(4);
    });

    it('Subtracts two numbers', function () {
      const result = subtract(2, 2);
      expect(result).to.equal(0);
    });
  });
});
