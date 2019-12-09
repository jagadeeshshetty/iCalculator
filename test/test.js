
const assert = require('assert');
const calculator = require('../index');

describe('Validate add functioanlity.', () => {
    describe('Verify 2 + 2 result.', () => {
        it('should return 4', () => {
            assert.equal(calculator.add(2, 2), 4);
        });
    });
    describe('Verify -2 + 2 result.', () => {
        it('should return 0', () => {
            assert.equal(calculator.add(-2, 2), 0);
        });
    });
});

describe('Validate multiply functionality.', () => {
    describe('Verify 2 x 2 result.', () => {
        it('should return 4', () => {
            assert.equal(calculator.multiply(2, 2), 4);
        });
    });
    describe('Verify -2 x 2 result.', () => {
        it('should return -4', () => {
            assert.equal(calculator.multiply(-2, 2), -4);
        });
    });
});

describe('Validate subtract functionality.', () => {
    describe('Verify 2 - 2 result.', () => {
        it('should return 0', () => {
            assert.equal(calculator.multiply(2, -2), -4);
        });
    });
    describe('Verify -2 - 2 result.', () => {
        it('should return 4', () => {
            assert.equal(calculator.multiply(-2, -2), 4);
        });
    });
});

describe('Validate division functionality.', () => {
    let result;
    describe('Verify 2 / 2 result.', () => {
        it('should return quotient: 1 and reminder: 0', () => {
            result = calculator.divide(2, 2);
            assert.equal(result.quotient, 1);
            assert.equal(result.reminder, 0);
        });
    });
    describe('Verify 2 / 0 result.', () => {
        it('should return \'Division by 0 not supported.\'', () => {
            assert.equal(calculator.divide(2, 0), 'Division by 0 not supported.');
        });
    });
    describe('Verify 3 / 2 result.', () => {
        it('should return quotient: 1 and reminder: 0', () => {
            result = calculator.divide(3, 2);
            assert.equal(result.quotient, 1.5);
            assert.equal(result.reminder, 1);
        });
    });
});
