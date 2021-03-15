import { expect } from 'chai';

import { add } from '../calculator.js';

describe('Calculator', function () {
  describe('Basic Operations', function () {
    it('Adds two numbers', function () {
      const result = add(2, 2);
      expect(result).to.equal(4);
    });
  });
});
