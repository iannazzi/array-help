var assert = require('assert');
var array_help = require('..');

describe('array_help.is_array', function() {
    it('returns false when passed a string', function() {
        assert.equal(array_help.is_array('abc'), false);

    });

    it('returns true when array is an array', function() {
        assert.equal(array_help.is_array([]), true);
    });

    it('returns false when array is an object', function() {
        assert.equal(array_help.is_array({}), false);
    });

});