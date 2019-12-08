
const assert = require('assert');
const calculator = require('../index');

describe('Validate add functioanlity.', () => {
    describe('Verify 2 + 2 result.', () => {
        it('should return 4', () => {
            assert.equal( calculator.add(2, 2), 4);
          });
    });
});

describe('Validate multiply functionality.', () => {
    describe('Verify 2 x 2 result.', () => {
        it('should return 4', () => {
            assert.equal( calculator.multiply(2, 2), 4);
          });
    });
});
