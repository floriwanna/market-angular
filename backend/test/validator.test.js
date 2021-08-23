const assert = require('assert');
describe('Array', function () {
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            assert.strictEqual([1, 2, 3].indexOf(4), -1);
        });
    });

});

describe('Validator.js', function () {
    const validator = require('./../app/service/validator');
    describe('function checkBodyStructure', () => {
        let body = { first_prop: 'value one', other_prop: 'other value', last_prop: 'last value' };

        describe('return true', () => {
            it('contains array of args', () => {
                assert.strictEqual(validator.checkBodyStructure(body, ['first_prop', 'other_prop', 'last_prop']), true)
            });
            it('contains one specific prop', () => {
                assert.strictEqual(validator.checkBodyStructure(body, 'other_prop'), true);
            })
        })

        describe('return false', () => {
            it("doesn't contains one prop in array args", () => {
                assert.strictEqual(validator.checkBodyStructure(body, ['first_prop', 'other_prop', 'unexisting_prop']), false);
            });
            it("doesn't contains the specific prop", () => {
                assert.strictEqual(validator.checkBodyStructure(body, 'unexisting_prop'), false);
            })
        })
        describe('throw exception', () => {
            it('undefined', () => {
                assert.throws(() => { validator.checkBodyStructure() }, new Error("body: undefined"), 'no body parameter');
                assert.throws(() => { validator.checkBodyStructure({}) }, new Error("args: undefined"), 'no args parameter');
            })
        });
    })
})

